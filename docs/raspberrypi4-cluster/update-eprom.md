# How to move Ubuntu from SD card to SSD for Raspberry Pi

## Step 1: Back up the SD card

```bash
diskutil list

```

Now we can back up the entire SD card to a file. I am going to name it pi_disk_backup.
```bash

sudo dd if=/dev/disk2 of=pi_disk_backup status=progress
```

## Step 2: Update Ubuntu

```bash

sudo apt update
sudo apt dist-upgrade
sudo apt install update-manager-core
```

## Step 3: Update bootloader

```bash
sudo apt install rpi-eeprom
# check the boot loader version:
sudo rpi-eeprom-update
# upgrade eeprom
sudo rpi-eeprom-update -a
sudo reboot
# Then reboot. Once the system is back on, we can check the version again. It should be up to date now.
sudo rpi-eeprom-update 
```

## Step 4: Change the boot order

```bash
sudo apt update
sudo apt install raspi-config
sudo raspi-config
```

Then do the following:

Select option 6 Advanced Options
Select option A6 Boot Order
Select option B1 USB Boot
select ok
select finish and select Yes to reboot

## Step 5: Clone

```bash

git clone https://github.com/billw2/rpi-clone.git 
cd rpi-clone
sudo cp rpi-clone /usr/local/sbin/sys-clone
sudo cp rpi-clone-setup /usr/local/sbin/sys-clone-setup
```

Connect your SSD to Raspberry Pi USB port, and find the disk by

```bash

lsblk

```

My SSD is sda. So I can start rpi-clone by

```bash
sudo sys-clone sda
# Type “yes”.
# Use the same label as the one on the SD card, input "writable"
# update sda1 label, otherwise the system cannot work properly
sudo fatlabel /dev/sda1 system-boot
```

After the cloning process complete, reboot and check if you are booting from the SSD by lsblk again.


## Check disk read speed

```bash

sudo hdparm -t  /dev/mmcblk0
sudo hdparm -t  /dev/sda
```

## k3s high cpu

```bash

sudo apt install linux-modules-extra-raspi && sudo reboot
```

## check cpu temp

```bash

vcgencmd measure_temp
```