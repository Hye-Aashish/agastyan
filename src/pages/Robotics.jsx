import LearnLayout from "../components/LearnLayout";

const Robotics = () => {
  return (
    <LearnLayout
      title="Robotics & IoT"
      subtitle="Design, assemble, and program intelligent autonomous robots, microcontrollers, embedded systems, and IoT connected hardware."
      category="Embedded Systems & Hardware Track"
      duration="3 - 6 Months"
      level="Beginner to Advanced"
      projects="5+ Working Robotic Prototypes & IoT Devices"
      tools={[
        "Arduino Uno/Mega",
        "Raspberry Pi 4",
        "ESP32 / ESP8266",
        "Embedded C/C++",
        "Python GPIO",
        "Sensors & Actuators",
        "MQTT / HTTP IoT",
        "Circuit Design",
      ]}
      targetRoles={[
        "Robotics Engineer",
        "IoT Solutions Developer",
        "Embedded Systems Developer",
        "Automation Engineer",
      ]}
      points={[
        {
          title: "Electronics & Circuit Design Fundamentals",
          desc: "Understand circuit schematics, breadboard prototyping, resistors, capacitors, transistors, relays, voltage regulators, and motor drivers.",
        },
        {
          title: "Microcontroller Programming with Arduino",
          desc: "Write Embedded C/C++ programs for digital/analog inputs, PWM motor control, serial telemetry, hardware interrupts, and timers.",
        },
        {
          title: "Sensor & Actuator Hardware Interfacing",
          desc: "Interface ultrasonic distance sensors, IR sensors, gyroscope/accelerometers, servo motors, stepper motors, and LCD/OLED displays.",
        },
        {
          title: "Raspberry Pi & Single-Board Embedded Computing",
          desc: "Configure Linux OS on Raspberry Pi, program GPIO pins using Python, interface USB/CSI cameras, and execute computer vision scripts.",
        },
        {
          title: "Internet of Things (IoT) & Cloud Telemetry",
          desc: "Connect ESP32 microcontrollers to Wi-Fi, publish sensor readings over MQTT/HTTP protocols, and create cloud monitoring dashboards.",
        },
        {
          title: "Autonomous Robotics Projects",
          desc: "Build obstacle-avoiding robots, line-tracking rovers, smart home automation hubs, robotic arms, and Bluetooth-controlled vehicles.",
        },
      ]}
    />
  );
};

export default Robotics;
