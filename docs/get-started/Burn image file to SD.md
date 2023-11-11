---
sidebar_position: 3
---

# Burn image file to SD

## Preparation

* Raspberry Pi 4
* TF card(8G or above)
* HDMI line
* Keyboard and mouse(optional)

* Insert SD card into the computer

### Download the burning tool and install it

 Download Raspberry Pi Imager, This tool is similar to [balenaEtcher](https://www.balena.io/etcher/)，you can go here[下载](https://www.raspberrypi.com/software/), Please choose the corresponding version to download accroding to the host system.

### Burn

#### Run the Image tool

![Run the Image tool](/img/image_start.png)

#### Select operation system select "custom image"

![custom image](/img/2022-03-18-12-39-44.png)

#### Choose image file

![Choose image file](/img/image.png)

#### Select the target SD card for installtion

![Select SD](/img/2022-03-18-12-42-34.png)

#### Burning

![Burn](/img/2022-03-18-13-02-46.png)

#### Burning completed

![Finish](/img/2022-03-18-13-05-36.png)

## Modify screen parameters

If screen is 1920x1080 scree, you can ignore this section.

### Scren parameter configration of 2K screen on raspberry

[Parameter reference](http://wiki.sunfounder.cc/index.php?title=Adjust_Resolution_for_Raspberry_Pi)

Open the file config.txt in the SD through your computer and add the following content.

```bash
    #2560x1440(2k),60hz,16:8的屏幕
    hdmi_cvt 2560 1440 60 3 0 0 0
    #hdmi_group=2 means DMT (Display Monitor Timings; the standard typically used by monitors)
    hdmi_group=2
    #hdmi_mode=87 indicates the resolution mode we set before.
    hdmi_mode=87
    #max_framebuffer_width=2560
    #max_framebuffer_height=1440
    #required
    hdmi_drive=1
    hdmi_boost=7
    #required,Enables the ignoring of EDID/display data if your display is a crappy Chinese one
    hdmi_ignore_edid=0xa5000080
```

## Fix mouse lag issues

Open file cmdline.txt， append the following code to it.

* Note that when adding in the same line, seperate them with spaces and do not wrap the lines.

```bash
usbhid.mousepoll=0

```

## 启用4k视频播放

Open file config.txt, Append the line to enable 4k video playback

hdmi_enable_4kp60=1
