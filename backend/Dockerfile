FROM openjdk:11-jdk
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} formyegg-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "formyegg-0.0.1-SNAPSHOT.jar"]