---
sidebar_position: 1
---

# Background

Having extensive experience covering Android, Windows, and WebOS digital signage platforms, Customized digital signage player app based on past development experience have problems with insufficient flexibility in content display design on Windows and Android platforms, requiring more effort to implement specific functions. Later, I came into the WebOS system, which is an interactive platform based on Node.js. Content display is based on the browser. The browser itself can accommodate a large number of content display features and has a huge design and development ecosystem. It is for this reason that I have invested a period of energy in the development of WebOS. WebOS also has an open source version, WebOS OSE (Open Source Edition).

In the process of learning and using WebOS OSE, I encountered some unsatisfied needs, such as the video player does not support GPU video decoding, cannot play 4K videos, and 1080p 60fps video files and other fatal problems, all of which need to be solved related to Chromium under Linux question.

Another challenge is that each WebOS OSE version upgrade requires manual compilation of the entire operating system. This process is time-consuming and labor-intensive. It usually takes 20 hours, takes up 200GB of hard disk space, and finally generates a 4GB firmware file.

Despite these challenges, the power of WebOS OSE is that it is based on the Node.js ecosystem, allowing developers with a JavaScript background to easily develop IoT application projects.

## Project Blueprint

Based on the above development experience, I started this project 1 years ago. The project is currently being updated and will continue to be updated;

### Project Objectives

#### Device OS Objectives

* Support Raspberry Pi board.
* The device firmware must be small enough, with the firmware size <500M.
* The firmware system can be quickly compiled and supports secondary development.
* The device program is developed based on the nodejs platform, which is developed based on chromium.

#### Bingo Cloud Objectives

* Safe enough, better security against hacker intrusion, tampering with content and malicious distribution of content.
* Content distribution platform, content Media files are better managed, are easier to combine, combined content is easier to distribute, and distributed content is easier to monitor.
* Better device management, device health check, support for ssh remote maintenance, device failure notification, etc.
* It is easier to integrate third-party components, such as react design components, and the distribution content is dynamically compiled into static HTML and distributed to the target device.
* Module containerization, supporting automatic construction.
* Basic customer management
* Integrate PayPai to realize global payment.
* Integrate Figma to realize secondary processing of media file.
  
## Project Progress

## Future Plan

## Market value of the project and future development direction