import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', 'https://uppraisalconsultant.in/wp-content/uploads/2022/03/Untitled-1-2.png'],
  ['Family Fund', 'https://uppraisalconsultant.in/wp-content/uploads/2022/03/Untitled-1-3.png'],
  ['Unseal', 'https://uppraisalconsultant.in/wp-content/uploads/2022/03/Untitled-1-4.png'],
  ['Mail Smirk', 'https://uppraisalconsultant.in/wp-content/uploads/2022/03/Untitled-1-5.png'],
  ['Home Work', 'https://uppraisalconsultant.in/wp-content/uploads/2022/03/Untitled-1-6.png'],
  ['Green Life', 'https://uppraisalconsultant.in/wp-content/uploads/2022/03/Untitled-1-7.png'],
  ['Bright Path', 'https://uppraisalconsultant.in/wp-content/uploads/2022/03/Untitled-1-9.png'],
  ['North Adventures', 'https://uppraisalconsultant.in/wp-content/uploads/2022/03/Untitled-1-8.png'],
]

const testimonials = [
  {
    client: { name: 'Phobia', logo: logoPhobiaDark },
    feedback: "The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs."
  },
  {
    client: { name: 'Family Fund', logo: logoFamilyFund },
    feedback: "Uppraisal Consultant provided us with exceptional service and support throughout our hiring process."
  },
  {
    client: { name: 'Unseal', logo: logoUnseal },
    feedback: "Their expertise in HR solutions has significantly improved our recruitment efficiency."
  },
  {
    client: { name: 'Mail Smirk', logo: logoMailSmirk },
    feedback: "We are extremely satisfied with the quality of candidates provided by Uppraisal Consultant."
  },
  {
    client: { name: 'Home Work', logo: logoHomeWork },
    feedback: "The team is professional, responsive, and truly understands our needs."
  },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized width={100} height={100} className='rounded-full'/>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Testimonials() {
  return (
    <div className="mt-24">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-neutral-950">
            What Our Clients Say
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          {testimonials.map(({ client, feedback }, index) => (
            <Testimonial key={index} className="mt-8" client={client}>
              {feedback}
            </Testimonial>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CompanyOverview() {
  return (
    <>
      <SectionIntro
        title="Uppraisal Consultant: Your Partner in HR Solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Uppraisal Consultant is a private Consulting Company based in Kolkata, India. Having initiated our operations in 2014, we have come a long way in working in close association with organizations across various industries, and addressing specific HR requirements.
        </p>
        <p>
          At our company, we realize your business’ need for growth and hence we commit to assist you in having the best possible HR solutions to make you succeed.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              Industries We Cater To
            </h3>
            <ul className="mt-4 list-disc list-inside text-base text-neutral-600">
              <li>Manufacturing</li>
              <li>FMCG</li>
              <li>Construction</li>
              <li>Real Estate</li>
              <li>Hospitality</li>
              <li>Healthcare</li>
              <li>Packaging & Logistics</li>
              <li>Automobile</li>
              <li>Information Technology</li>
            </ul>
          </article>
          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              Our Vision & Mission
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Our Vision is to become a leading HR Consulting Company in India, adhering to our core principles and values for our stakeholders.
            </p>
            <p className="mt-2 text-base text-neutral-600">
              Our Mission is to address and solve key HR needs of our clients, develop long lasting partnerships with them, and ensure their success in growth, development and competitiveness in their respective industries.
            </p>
          </article>
          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              Client Benefits & Values
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Our clients are our most valued partners. With our service, benefits for our clients include:
            </p>
            <ul className="mt-2 list-disc list-inside text-base text-neutral-600">
              <li>Quality candidates</li>
              <li>Right fitment</li>
              <li>Better productivity</li>
              <li>Adhering the TAT time</li>
              <li>Flexible in molding and adding services according to client requirement</li>
            </ul>
            <p className="mt-4 text-base text-neutral-600">
              Our Values: Honesty, Ingenuity, Trust, Value-centricity, Collaboration, Accountability, Respect, Loyalty, Passion for customers.
            </p>
          </article>
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Our Comprehensive Staffing Solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We provide a range of staffing solutions tailored to meet your business needs.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Permanent Staffing Solution (PSS)">
              We conduct extensive searches for quality candidates based on client preferences and requirements, ensuring long-term employment associations.
            </ListItem>
            <ListItem title="Executive Search">
              We provide search and solutions for clients requiring senior-level executives and managers, aligning talent with business objectives.
            </ListItem>
            <ListItem title="Payroll & Compliance">
              Our services help employers save time and money, providing support for employee salary queries and enhancing HR management.
            </ListItem>
            <ListItem title="Training & Development">
              We offer on-job soft skill and motivational training, improving organizational effectiveness and employee morale.
            </ListItem>
            <ListItem title="Temporary Staffing">
              We provide temporary staffing services, matching skilled temporary employees to your business needs.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
           Leading man power supplier for your needs
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At Uppraisal, we cater to small, medium, and large businesses across India, focusing on specific employee-related needs. Our dynamic strategies and expertise make us a one-stop solution for all your HR requirements.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CompanyOverview />

    

      <Services />
     <FadeIn>
     <Testimonials />
     </FadeIn>
      <ContactSection />
    </>
  )
}
