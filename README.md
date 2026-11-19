
<br />
<div align="center">
  </a>

  <h3 align="center">Clinic Management System</h3>

  <p align="center">
    A web-based application designed to support non-profit organizations in managing their charitable activities through a centralized platform. <br />
    <a href="https://github.com/thanneesharamesh/CharityManagementSystem/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/thanneesharamesh/CharityManagementSystem/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>


## About The Project
<br/>
<div align="center">
  </a>
</div>

The proposed Charity Management System is a web-based application designed to support non-profit organisations in managing their charitable activities through a centralised platform. The system consists of six main modules, with three modules for organisation administrators and three modules for users. It allows organisations to manage fundraising campaigns, donations, volunteers, beneficiaries and assistance distribution, while users can donate, request aid and register as volunteers.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

**Frontend & App Framework**
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)

**Backend & Database**
* ![Python](https://img.shields.io/badge/python-%233670A0.svg?style=for-the-badge&logo=python&logoColor=ffdd54)
* ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

[Propose Features](https://github.com/thanneesharamesh/CharityManagementSystem/issues/new?labels=enhancement&template=feature-request---.md)

- [ ] UI Draft

See the [open issues](https://github.com/thanneesharamesh/CharityManagementSystem/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


(change later, copy pasted from my previous project)*************___________________________________________
## Technical Implementation
POLE combines high-performance mobile development with edge AI and IoT to create a seamless assistive experience.

### Powered by Google Tools
*   **Flutter & Dart**: Cross-platform frontend for high-performance, consistent UI across iOS and Android.
*   **Gemini 1.5 Flash**: Orchestrates real-time image analysis directly on the hardware for lightning-fast obstacle description.
*   **Firebase Ecosystem**:
    *   **Authentication**: Secure user and caregiver login.
    *   **Cloud Firestore**: Real-time synchronization of stick status, GPS logs, and pairing data.
    *   **Firebase Storage**: Secure hosting for the AI-captured environment snapshots.
*   **Google Maps Platform**: Precise real-time tracking and location history visualization for caregivers.

### The Ecosystem
1.  **POLE (Edge AI)**: An **ESP32-S3** captures images which are processed by **Gemini 1.5 Flash** to generate natural language descriptions of the environment.
2.  **Communication (Blynk)**: Uses the Blynk IoT bridge to transmit hardware data (distance, AI descriptions, status) securely to the cloud.
3.  **The Mobile App**: A Flutter-based dashboard that aggregates sensor data, displays the Google Map, and provides real-time notifications and weather updates via **OpenWeather API**.
4.  **Caregiver Sync**: Real-time pairing system allows family members to monitor the user’s safety and location history instantly via Firestore listeners.

## Implementation, Innovation, and Challenges

### Innovation: AI on the Edge
Unlike traditional assistive tools that rely on a phone's camera, POLE brings **Edge AI** directly to the walking stick. By integrating **Gemini 1.5 Flash** with an **ESP32-S3**, we created a device that can "see" and "describe" the environment with human-like detail, providing a revolutionary level of independence for the visually impaired.

### Implementation Strategy
The project follows a modular architecture:
*   **Hardware Layer**: Low-level C++ code managing sensor interrupts and AI image capture.
*   **IoT Bridge**: A secure data tunnel using Blynk to ensure real-time communication without complex server management.
*   **Mobile Layer**: A Flutter app acting as a high-level control center for both the user and their caregiver.
*   **Security First**: Implementation of environment-based configuration for all sensitive API keys (Google Maps, Firebase, Weather).

### Challenges Faced & Overcome
1.  **Memory Constraints**: The ESP32-S3 has limited PSRAM. We optimized the AI image capture and encoding process to ensure high-quality images could be sent to Gemini without crashing the hardware.
2.  **Real-Time Data Sync**: To ensure caregiver tracking was accurate, we implemented a custom polling and Firestore listener system to balance battery life with real-time updates.
3.  **Security in Open Source**: We faced a challenge in keeping our private API keys secure for the hackathon. We overcame this by building a custom `.env` loading logic for our Flutter app and securing our `.gitignore`.

# Contributors
This project was a collaborative effort by the following members:
* **AI integration, ESP32 programming & Testing: Choong Jun Zac [GitHub](https://github.com/ishtardsama)**
* **Mobile App development(Backend/Frontend Design), UX & Testing: Oh Chu Meng [GitHub](https://github.com/MengsChill)**
* **Electrical Engineering, Prototype Modeling & Testing: Teoh Yue Wen [GitHub](https://github.com/TealApples)**
* **Budget allocation, Finance, Marketing: Jaccob Chin Sing Hung(No Github 😢)**

<p align="right">(<a href="#readme-top">back to top</a>)</p>
