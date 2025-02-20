import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Faq() {
  return (
    <>
      {/* component  */}
      <section class="text-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-5xl text-2xl font-primary font-semibold text-center title-font text-secondary mb-4">
              Frequently Asked Question
            </h1>
            <p class="font-medium text-lg text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center gap-5 lg:w-full sm:mx-auto sm:mb-2 -mx-2">
            {/* <div class="w-full lg:w-1/2  px-4 py-2"> */}
            {/* <Transition transition={true}> */}
            <Disclosure
              as="div"
              className="p-6 bg-primary/50 rounded-2xl w-2/3"
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-primary">
                  What is your refund policy?
                </span>
                <ChevronDownIcon className="size-5 fill-primary/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 h-52 text-sm/5 text-black/50">
                If you're unhappy with your purchase, we'll refund you in full.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ducimus quis, cum quod esse sunt veniam illo adipisci
                earum sint ipsa, commodi soluta voluptatibus voluptate veritatis
                aspernatur placeat cumque labore architecto maiores facere
                vitae. Delectus, inventore et, totam neque, sed beatae optio
                nihil ducimus placeat est asperiores. Rerum earum eum quaerat
                ducimus obcaecati assumenda eligendi fugit et explicabo autem
                sapiente voluptatibus id esse inventore voluptates libero
                distinctio, ab modi ex optio, fugiat aspernatur doloremque
                dolorem! Ducimus tempore deleniti facilis dolores necessitatibus
                explicabo, voluptate aliquam sit dolorem omnis quibusdam libero
                voluptas. Placeat tenetur veritatis esse itaque minima
                voluptates rem ipsa maxime?
              </DisclosurePanel>
            </Disclosure>
            <Disclosure
              as="div"
              className="p-6 bg-primary/50 rounded-2xl w-2/3"
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-primary">
                  What is your refund policy?
                </span>
                <ChevronDownIcon className="size-5 fill-primary/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 h-52 text-sm/5 text-black/50">
                If you're unhappy with your purchase, we'll refund you in full.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ducimus quis, cum quod esse sunt veniam illo adipisci
                earum sint ipsa, commodi soluta voluptatibus voluptate veritatis
                aspernatur placeat cumque labore architecto maiores facere
                vitae. Delectus, inventore et, totam neque, sed beatae optio
                nihil ducimus placeat est asperiores. Rerum earum eum quaerat
                ducimus obcaecati assumenda eligendi fugit et explicabo autem
                sapiente voluptatibus id esse inventore voluptates libero
                distinctio, ab modi ex optio, fugiat aspernatur doloremque
                dolorem! Ducimus tempore deleniti facilis dolores necessitatibus
                explicabo, voluptate aliquam sit dolorem omnis quibusdam libero
                voluptas. Placeat tenetur veritatis esse itaque minima
                voluptates rem ipsa maxime?
              </DisclosurePanel>
            </Disclosure>
            <Disclosure
              as="div"
              className="p-6 bg-primary/50 rounded-2xl w-2/3"
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-primary">
                  What is your refund policy?
                </span>
                <ChevronDownIcon className="size-5 fill-primary/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 h-52 text-sm/5 text-black/50">
                If you're unhappy with your purchase, we'll refund you in full.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ducimus quis, cum quod esse sunt veniam illo adipisci
                earum sint ipsa, commodi soluta voluptatibus voluptate veritatis
                aspernatur placeat cumque labore architecto maiores facere
                vitae. Delectus, inventore et, totam neque, sed beatae optio
                nihil ducimus placeat est asperiores. Rerum earum eum quaerat
                ducimus obcaecati assumenda eligendi fugit et explicabo autem
                sapiente voluptatibus id esse inventore voluptates libero
                distinctio, ab modi ex optio, fugiat aspernatur doloremque
                dolorem! Ducimus tempore deleniti facilis dolores necessitatibus
                explicabo, voluptate aliquam sit dolorem omnis quibusdam libero
                voluptas. Placeat tenetur veritatis esse itaque minima
                voluptates rem ipsa maxime?
              </DisclosurePanel>
            </Disclosure>
            <Disclosure
              as="div"
              className="p-6 bg-primary/50 rounded-2xl w-2/3"
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-primary">
                  What is your refund policy?
                </span>
                <ChevronDownIcon className="size-5 fill-primary/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 h-52 text-sm/5 text-black/50">
                If you're unhappy with your purchase, we'll refund you in full.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ducimus quis, cum quod esse sunt veniam illo adipisci
                earum sint ipsa, commodi soluta voluptatibus voluptate veritatis
                aspernatur placeat cumque labore architecto maiores facere
                vitae. Delectus, inventore et, totam neque, sed beatae optio
                nihil ducimus placeat est asperiores. Rerum earum eum quaerat
                ducimus obcaecati assumenda eligendi fugit et explicabo autem
                sapiente voluptatibus id esse inventore voluptates libero
                distinctio, ab modi ex optio, fugiat aspernatur doloremque
                dolorem! Ducimus tempore deleniti facilis dolores necessitatibus
                explicabo, voluptate aliquam sit dolorem omnis quibusdam libero
                voluptas. Placeat tenetur veritatis esse itaque minima
                voluptates rem ipsa maxime?
              </DisclosurePanel>
            </Disclosure>
            <Disclosure
              as="div"
              className="p-6 bg-primary/50 rounded-2xl w-2/3"
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-primary">
                  What is your refund policy?
                </span>
                <ChevronDownIcon className="size-5 fill-primary/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 h-52 text-sm/5 text-black/50">
                If you're unhappy with your purchase, we'll refund you in full.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis ducimus quis, cum quod esse sunt veniam illo adipisci
                earum sint ipsa, commodi soluta voluptatibus voluptate veritatis
                aspernatur placeat cumque labore architecto maiores facere
                vitae. Delectus, inventore et, totam neque, sed beatae optio
                nihil ducimus placeat est asperiores. Rerum earum eum quaerat
                ducimus obcaecati assumenda eligendi fugit et explicabo autem
                sapiente voluptatibus id esse inventore voluptates libero
                distinctio, ab modi ex optio, fugiat aspernatur doloremque
                dolorem! Ducimus tempore deleniti facilis dolores necessitatibus
                explicabo, voluptate aliquam sit dolorem omnis quibusdam libero
                voluptas. Placeat tenetur veritatis esse itaque minima
                voluptates rem ipsa maxime?
              </DisclosurePanel>
            </Disclosure>
            {/* </Transition> */}
            {/* </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Can I change the domain you give me?
                </summary>

                <span class="px-4 py-2 duration-300 ease-in-out">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4 duration-300 ease-in-out">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How many sites I can create at once?
                </summary>

                <span class="px-4 py-2 duration-300 ease-in-out">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4 duration-300 ease-in-out">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How can I communicate with you?
                </summary>

                <span class="px-4 py-2 duration-300 ease-in-out">
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
