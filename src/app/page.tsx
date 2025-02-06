import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
  Column,
  SmartImage,
} from "@/once-ui/components";

import { routes } from "@/app/resources";
import { home, about, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          alt: title,
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <Column
      maxWidth="l"
      marginLeft="xl"
      paddingLeft="m"
      gap="l"
      horizontal="center"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l">
        <Column maxWidth="s">
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="start"
            paddingBottom="m"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="start"
            paddingBottom="m"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="1" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <Column>
        <RevealFx translateY="4" horizontal="start">
          <Heading id="Projects" variant="display-strong-s">
            Projects
          </Heading>
        </RevealFx>
      </Column>
      <Column maxWidth="l">
        <RevealFx
          translateY="4"
          delay={0.2}
          fillWidth
          horizontal="center"
          marginBottom="m"
        >
          <Heading variant="heading-strong-xl">Web</Heading>
        </RevealFx>
        <Column fillWidth paddingY="l">
          <Column maxWidth="l" paddingRight="xl">
            <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
              <Text variant="heading-strong-l" onBackground="brand-weak">
                Amazon Management System (AMS)
              </Text>
            </RevealFx>
            <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                marginTop="s"
              >
                Typescript (Angular) & NodeJS for hosting, permission system for
                admin/student usage, PUB-SUB data model & controlled data flow,
                VMC & Repository based code flow, Services based communication
                system between components and each other, and the database.
              </Text>
            </RevealFx>
            <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
              <Text
                variant="heading-strong-l"
                onBackground="brand-weak"
                marginTop="xl"
              >
                The Rick Astley Stop
              </Text>
            </RevealFx>
            <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                marginTop="s"
                marginBottom="m"
              >
                Graphics scenery with animation, movement, particle speed and
                day-time mechanic, uses ThreeJS for 3D implementation,
                Algorithms for realistic clouds movement and animation.
              </Text>
            </RevealFx>
          </Column>
        </Column>
        <Column>
          <RevealFx
            translateY="4"
            delay={0.2}
            fillWidth
            horizontal="center"
            marginBottom="m"
            marginTop="xl"
          >
            <Heading variant="heading-strong-xl">Android</Heading>
          </RevealFx>
          <Column fillWidth>
            <Column maxWidth="l">
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text variant="heading-strong-l" onBackground="brand-weak">
                  Wagba
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  marginTop="s"
                >
                  Food ordering application for university students with
                  Real-time database integration, order conflict handling,
                  separate account history and firebase login handling.
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="heading-strong-l"
                  onBackground="brand-weak"
                  marginTop="xl"
                >
                  FlickPick
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  marginTop="s"
                >
                  Movie rating/commenting application with TMDB API integration
                  using REST, Real-time data management to load movies while
                  scrolling and Rating-based search for similar movies.
                </Text>
              </RevealFx>
              <RevealFx
                translateY="4"
                delay={0.2}
                fillWidth
                horizontal="center"
                marginTop="xl"
                marginBottom="m"
              >
                <img src="/images/FlickPick.jpg" width={340} height={800}></img>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="heading-strong-l"
                  onBackground="brand-weak"
                  marginBottom="m"
                  marginTop="xl"
                >
                  WelcherArtikel
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  marginTop="s"
                  marginBottom="m"
                >
                  German/Arabic application to test high school students on the
                  artikel of German words that uses firebase database to keep
                  track of each student’s progress, usage of hash-maps to
                  organize the German word, its artikel, and its Arabic
                  translation into easily retrieved objects.
                </Text>
              </RevealFx>
              <RevealFx
                translateY="4"
                delay={0.2}
                fillWidth
                horizontal="center"
                marginTop="xl"
                marginBottom="m"
              >
                <img
                  src="/images/WelcherArtikel.jpg"
                  width={340}
                  height={800}
                ></img>
              </RevealFx>
            </Column>
          </Column>
        </Column>
        <Column>
          <RevealFx
            translateY="4"
            delay={0.2}
            fillWidth
            horizontal="center"
            marginTop="xl"
            marginBottom="m"
          >
            <Heading variant="heading-strong-xl">Embedded Systems</Heading>
          </RevealFx>
          <Column fillWidth>
            <Column maxWidth="l">
              <RevealFx
                translateY="4"
                delay={0.2}
                fillWidth
                horizontal="start"
                marginTop="s"
              >
                <Text variant="heading-strong-l" onBackground="brand-weak">
                  Pedestrian Traffic Simulation
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  marginTop="s"
                >
                  Designed & implemented a real-time pedestrian traffic control
                  system using Tiva C microcontroller, utilized RTOS to manage
                  concurrent tasks and ensuring pedestrian safety.
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="heading-strong-l"
                  onBackground="brand-weak"
                  marginTop="xl"
                >
                  Feedback Heater Simulation
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  marginTop="s"
                  marginBottom="m"
                >
                  Designed & implemented a feedback heater to keep the
                  temperature above a certain level, uses semaphores to prevent
                  race conditions and interrupts for task handling.
                </Text>
              </RevealFx>
            </Column>
          </Column>
        </Column>
        <Column>
          <RevealFx
            translateY="4"
            delay={0.2}
            fillWidth
            horizontal="center"
            marginTop="xl"
            marginBottom="m"
          >
            <Heading variant="heading-strong-xl">Desktop</Heading>
          </RevealFx>
          <Column fillWidth>
            <Column maxWidth="l">
              <RevealFx
                translateY="4"
                delay={0.2}
                fillWidth
                horizontal="start"
                marginTop="s"
              >
                <Text variant="heading-strong-l" onBackground="brand-weak">
                  A Giants Conscience: The Evil Seed
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  marginTop="s"
                >
                  Unreal Engine 5.2 based 3D video game, UE blueprints based on
                  OOP models, particle system (Niagara), sound-wave manipulation
                  & creation system (Metasound), Facial expression animation
                  using Omniverse.
                </Text>
              </RevealFx>
              <RevealFx
                translateY="4"
                delay={0.2}
                fillWidth
                horizontal="center"
                marginTop="xl"
                marginBottom="m"
              >
                <img
                  src="/images/GradProject.jpg"
                  width={600}
                  height={600}
                ></img>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="heading-strong-l"
                  onBackground="brand-weak"
                  marginTop="xl"
                >
                  Sad Diver
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  marginTop="s"
                >
                  A Greenfoot engine based game, developed to demonstrate a
                  real-life application of coding principles to a friend,
                  designed as educational tool prioritizing clean and structured
                  code.
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="heading-strong-l"
                  onBackground="brand-weak"
                  marginTop="xl"
                >
                  Foxie Da Fox
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  marginTop="s"
                >
                  Unreal Engine 5 based 2D scroller video game, Interactive
                  user-friendly UI, score based game tailored for speed runners
                  competitions, downloadable{" "}
                  <a href="https://drive.google.com/drive/folders/1mn6YuOPfT0VwOWq2Gv2o66PIbu71d0Nh">
                    here.
                  </a>
                </Text>
              </RevealFx>
              <RevealFx
                translateY="4"
                delay={0.2}
                fillWidth
                horizontal="center"
                marginTop="xl"
                marginBottom="m"
              >
                <img src="/images/foxie.png" width={300} height={300}></img>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="heading-strong-l"
                  onBackground="brand-weak"
                  marginTop="xl"
                >
                  Back-Front Switch
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  marginTop="s"
                >
                  Python based parallel-programming application to find the
                  background of a video, then subtract it from an image to
                  better recognize new shapes and help AI detection, used MSMPI
                  and OpenMP for parallelization.
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="heading-strong-l"
                  onBackground="brand-weak"
                  marginTop="xl"
                >
                  Path-Finding Visualization
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  marginTop="s"
                >
                  Python based AI visualization application to show basic AI
                  algorithms and visualize them for educational purposes.
                </Text>
              </RevealFx>
            </Column>
          </Column>
        </Column>
      </Column>
    </Column>
  );
}

// <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
//   <Text variant="heading-strong-l">Android</Text>
// </RevealFx>
// <RevealFx translateY="4" delay={0.2} fillWidth horizontal="start">
//   <Text variant="body-default-m" onBackground="brand-weak">
//     Wagba
//   </Text>
// </RevealFx>

/* <Column fillWidth border="accent-medium">
  <RevealFx translateY="4" horizontal="start" paddingBottom="m">
    <Heading wrap="balance" variant="heading-default-xl">
      Android
    </Heading>
  </RevealFx>
</Column>; */
