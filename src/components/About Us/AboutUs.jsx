import React from "react";
import { RoundedButton } from "../RoundedButton";
import TeamMember from "./TeamMember";

export default function AboutUs() {
  return (
    <section>
      <div className="h-1/2 w-lg flex flex-col justify-start items-start gap-4 mx-20 my-28">
        <h5 className="text-primary font-agrandir font-bold md:text-2xl ">
          About Us
        </h5>
        <h1 className="text-secondary font-bold md:text-6xl md:mb-2">
          AgencyV2
        </h1>
        <p className="font-agrandir text-secondary text-base leading-6 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          tempore, veritatis necessitatibus repellendus voluptatum harum
          repudiandae provident nisi saepe fugiat molestiae hic quisquam
          laudantium quibusdam sequi deserunt, unde enim nemo quasi iure
          consequuntur? Exercitationem, distinctio. Optio eos amet vitae ducimus
          nemo illum et vel quod voluptatibus debitis, aperiam, voluptatum odit?
        </p>
        <RoundedButton
          text={"Contact"}
          bgColor={"primary"}
          customStyle={"text-white mt-4 font-agrandir uppercase"}
        />
      </div>
      <div class="text-center mt-20 pb-12">
        <h1 class="font-semibold text-3xl md:text-4xl font-heading text-black font-primary mb-1.5">
          Our Leadership Team
        </h1>
        <h6 class="text-lg font-primary font-medium text-black/50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex
          itaque vel eligendi aliquam exercitationem quaerat ullam maiores
          excepturi quas.
        </h6>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-72">
        {[...Array(9)].map((e, i) => (
          <TeamMember
            key={i}
            memberName={"John Doe"}
            memberRole={"Software Engineer"}
            memberImg={
              "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            }
          />
        ))}
      </div>

      <div className="h-1/2 w-7xl flex flex-col justify-start items-start gap-4 mx-20 my-28">
        <h5 className="text-primary font-agrandir font-bold md:text-2xl ">
          Company
        </h5>

        <p className="font-agrandir text-secondary text-base leading-6 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quam
          consequatur quibusdam delectus laborum facilis officiis nesciunt
          illum, hic expedita quo alias adipisci nemo tempora excepturi.
          Explicabo, a vero odit provident quisquam ratione adipisci at, nulla
          totam amet tempore cupiditate ad officia eum perferendis voluptate
          similique reiciendis minus fugiat eveniet est culpa delectus dicta!
          Enim dolor provident aut consectetur natus vitae! Tenetur minus iste
          totam omnis dolor inventore quo eum voluptatum architecto sequi
          delectus a ducimus ipsam explicabo quae rem, quis sapiente ut?
          Consequuntur repellendus error porro optio aliquam, incidunt nisi
          voluptas ducimus nesciunt eum. Tenetur unde non, porro sint dolor
          inventore esse neque dolorem, beatae possimus laborum autem harum
          maxime aperiam illum, quae vel vero excepturi est magnam fuga a eos
          qui. Architecto saepe soluta aliquam corporis quibusdam autem esse
          excepturi atque aut asperiores fuga itaque, quo explicabo qui suscipit
          rerum ea amet at veritatis molestiae repellendus possimus ullam neque?
          Eveniet eos debitis blanditiis dignissimos. Voluptas beatae soluta
          alias tenetur enim quos aperiam omnis culpa, minima, eos odio dolorum?
          Alias dolorem ut atque consequatur asperiores! Fuga et id deserunt
          laborum cupiditate inventore voluptate nisi, harum rerum veniam
          consectetur pariatur mollitia, quas necessitatibus corrupti nemo! Quia
          ea debitis consectetur perspiciatis!
        </p>
      </div>
      <div className="h-1/2 w-7xl flex flex-col justify-start items-start gap-4 mx-20 mt-28 mb-52">
        <h5 className="text-primary font-agrandir font-bold md:text-2xl ">
          Team
        </h5>

        <p className="font-agrandir text-secondary text-base leading-6 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil ea
          nostrum officia error id recusandae voluptate nam cumque voluptatum
          vitae et commodi quasi, nemo earum explicabo vel deleniti voluptates!
          Beatae enim necessitatibus in hic, ipsa, eveniet facere dolore dolor
          quos laborum ratione sit. Voluptatum, veniam corrupti doloribus ea
          pariatur eaque suscipit magni error vel natus eligendi id distinctio
          ipsa voluptates dicta praesentium iusto rem ipsam eius dolorem. Dolor
          facere vel, quo nostrum assumenda aliquid ipsam itaque tenetur dolores
          expedita, ex neque sequi est laudantium placeat quibusdam cum debitis?
          Ea qui quaerat optio fuga! Provident, nobis ad quod iure placeat nisi
          eveniet architecto. Recusandae, tenetur nam. Laborum excepturi
          laudantium voluptate minima nesciunt dignissimos culpa repudiandae
          perferendis quisquam doloribus architecto ea, dicta omnis eos sunt
          quasi repellendus nobis, perspiciatis cumque ipsam tempore quae
          repellat quod! Officiis quia vero numquam corporis? Labore aspernatur
          voluptatibus, natus repudiandae velit debitis facere rerum! Cumque
          aspernatur ipsam aperiam quasi cum voluptates eum odit quia distinctio
          laborum iusto officiis sunt, itaque saepe provident rerum repudiandae
          excepturi doloribus nam accusamus natus? Omnis molestiae nobis atque
          autem? Harum, aperiam? nemo illum et vel quod voluptatibus debitis,
          aperiam, voluptatum odit?
        </p>
      </div>
    </section>
  );
}
