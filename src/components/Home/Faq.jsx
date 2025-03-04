import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Faq() {
  const frequentQuestions = [
    {
      question: "What services does your digital agency offer?",
      answer:
        "We offer a comprehensive range of digital services including web design and development, mobile app development, digital marketing, SEO optimization, brand strategy, UI/UX design, and custom software solutions. Our web development services cover everything from responsive websites to complex web applications using modern frameworks like React and Node.js. For mobile development, we specialize in both iOS and Android platforms, creating native and cross-platform applications. Our digital marketing services include SEO, PPC advertising, social media management, content marketing, and email campaigns. We also offer comprehensive UI/UX design services with user research, wireframing, prototyping, and usability testing. Our team specializes in creating innovative digital solutions tailored to meet your specific business needs and goals.",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary depending on scope and complexity. A basic website typically takes 4-6 weeks, which includes initial design concepts, development, content integration, testing, and launch preparation. Medium-sized projects like e-commerce sites usually take 2-3 months, involving more complex features, payment integration, and security implementations. Large-scale projects like custom applications may take 3-6 months or more, especially when including features like user authentication, database design, API integrations, and extensive testing. During our initial consultation, we'll provide a detailed timeline based on your specific requirements, breaking down each phase of development. We maintain transparent communication throughout the project with weekly progress reports and regular milestone reviews to keep you updated on progress.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based and depends on factors like scope, complexity, timeline, and required features. We offer flexible payment plans including milestone-based payments and monthly retainers. For websites, pricing typically ranges from $5,000 for basic sites to $50,000+ for complex e-commerce platforms. Mobile app development usually starts at $25,000 and can go up to $150,000+ depending on functionality. Digital marketing services are available as monthly retainers starting at $2,500, with custom packages for specific campaign needs. Each client receives a detailed proposal outlining costs, deliverables, timeline, and payment schedules. We believe in transparent pricing with no hidden fees, ensuring you know exactly what you're investing in. We also offer flexible payment terms and can work with you to create a payment plan that fits your budget.",
    },
    {
      question: "How do you handle project communication and updates?",
      answer:
        "We maintain regular communication through scheduled check-ins, progress reports, and a dedicated project management platform. You'll have a designated project manager as your main point of contact who oversees all aspects of your project. We conduct weekly status meetings to discuss progress, address concerns, and gather feedback. Our communication stack includes Slack for daily updates and quick questions, Zoom for video conferences and presentations, and email for formal communications and documentation. We use project management tools like Jira or Trello to track progress, which clients can access 24/7. We provide detailed weekly progress reports covering completed tasks, upcoming milestones, and any potential challenges. Our transparent approach ensures you're always informed about your project's status, with emergency support available when needed.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive post-launch support and maintenance packages tailored to your needs. Our basic maintenance package includes weekly backups, security monitoring, uptime tracking, and bug fixes, starting at $500/month. The premium package adds performance optimization, content updates, feature enhancements, and priority support, starting at $1,500/month. We conduct monthly security audits, implement regular software updates, and monitor website performance metrics. Our technical support team is available via email, phone, and emergency hotline for critical issues. We also provide extensive training sessions for your team, including video tutorials and documentation, to effectively manage your digital assets. Additionally, we offer quarterly strategy sessions to discuss performance metrics, user feedback, and potential improvements. Our goal is to ensure your digital solution continues to perform optimally and evolve with your business needs, with 99.9% uptime guaranteed for all our hosted solutions.",
    },
  ];
  return (
    <>
      {/* component  */}
      <section className="text-gray-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-5xl text-2xl font-primary font-semibold text-center title-font text-secondary mb-4">
              Frequently Asked Question
            </h1>
            <p className="font-medium text-lg text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 lg:w-full sm:mx-auto sm:mb-2 -mx-2">
            {/* <div className="w-full lg:w-1/2  px-4 py-2"> */}
            {/* <Transition transition={true}> */}
            {frequentQuestions.map((item, idx) => (
              <Disclosure
                key={idx}
                as="div"
                defaultOpen={idx === 0}
                className="p-6 bg-bgColor rounded-2xl w-2/3"
              >
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-gray-600 group-data-[hover]:text-primary">
                    {item.question}
                  </span>
                  <ChevronDownIcon className="size-5 fill-primary/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 h-52 text-sm/5 text-primary">
                  {item.answer}
                </DisclosurePanel>
              </Disclosure>
            ))}

            {/* </Transition> */}
            {/* </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Can I change the domain you give me?
                </summary>

                <span className="px-4 py-2 duration-300 ease-in-out">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4 duration-300 ease-in-out">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How many sites I can create at once?
                </summary>

                <span className="px-4 py-2 duration-300 ease-in-out">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4 duration-300 ease-in-out">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How can I communicate with you?
                </summary>

                <span className="px-4 py-2 duration-300 ease-in-out">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
