import Link from "next/link";
import { notFound } from "next/navigation";

const useCases = {
  "horse-owners": {
    title: "Horse Owners",
    eyebrow: "FOR HORSE OWNERS",
    imageLabel: "Horse Owners Image",
    description:
      "EquiKai gives horse owners greater visibility into the horses they care about, bringing health, movement and location information together in one place.",
    sections: [
      {
        title: "Know more between check-ins.",
        text:
          "Horse owners cannot be beside their horses every moment of the day. EquiKai is designed to provide another layer of visibility into what is happening when they are away.",
      },
      {
        title: "Understand changes.",
        text:
          "Monitoring health and movement information can make changes easier to notice and investigate, supporting more informed decisions about everyday care.",
      },
      {
        title: "Stay connected.",
        text:
          "With health, movement and location information brought together, owners can have a clearer picture of their horse's day-to-day activity.",
      },
    ],
  },

  trainers: {
    title: "Trainers",
    eyebrow: "FOR TRAINERS",
    imageLabel: "Trainers Image",
    description:
      "EquiKai is designed to give trainers another source of information when understanding activity, movement and changes during training.",
    sections: [
      {
        title: "See beyond the training session.",
        text:
          "Training decisions are made from more than what can be observed during a single session. EquiKai can provide additional information about movement and activity.",
      },
      {
        title: "Track patterns.",
        text:
          "Structured monitoring can help trainers build a clearer picture of how horses are moving and behaving over time.",
      },
      {
        title: "Make informed decisions.",
        text:
          "EquiKai is designed to complement the trainer's existing knowledge and observation rather than replace it.",
      },
    ],
  },

  veterinarians: {
    title: "Veterinarians",
    eyebrow: "FOR VETERINARIANS",
    imageLabel: "Veterinarians Image",
    description:
      "EquiKai can provide additional information from everyday monitoring that may help veterinary professionals understand a horse's situation.",
    sections: [
      {
        title: "More context.",
        text:
          "Veterinary decisions can benefit from understanding what has been happening outside the moments when a horse is directly examined.",
      },
      {
        title: "Bring monitoring into the conversation.",
        text:
          "Health and movement information can provide additional context alongside professional examination and clinical judgement.",
      },
      {
        title: "Support earlier attention.",
        text:
          "Changes that may otherwise be difficult to notice can be surfaced for closer investigation.",
      },
    ],
  },

  breeders: {
    title: "Breeders",
    eyebrow: "FOR BREEDERS",
    imageLabel: "Breeders Image",
    description:
      "EquiKai provides breeders with another layer of visibility into horses under their care.",
    sections: [
      {
        title: "Monitor more consistently.",
        text:
          "Structured monitoring can help breeders keep a closer eye on horses across everyday stable activities.",
      },
      {
        title: "Understand activity.",
        text:
          "Movement and location information can provide useful context around the horse's routine.",
      },
      {
        title: "Support better care.",
        text:
          "The goal is simple: give breeders more information to support the horses they are responsible for.",
      },
    ],
  },

  insurance: {
    title: "Insurance",
    eyebrow: "FOR INSURANCE",
    imageLabel: "Insurance Image",
    description:
      "EquiKai creates opportunities for structured horse monitoring data to become part of conversations around equine risk.",
    sections: [
      {
        title: "Explore better information.",
        text:
          "Insurance decisions can benefit from reliable information about the animals and activities being covered.",
      },
      {
        title: "Understand risk differently.",
        text:
          "Continuous monitoring creates opportunities to explore new approaches to risk assessment and management.",
      },
      {
        title: "Build with data.",
        text:
          "EquiKai is developing the infrastructure needed to make horse monitoring data more useful across the equestrian ecosystem.",
      },
    ],
  },

  regulators: {
    title: "Regulators",
    eyebrow: "FOR REGULATORS",
    imageLabel: "Regulators Image",
    description:
      "EquiKai can support future welfare and oversight initiatives through structured information about horse activity and monitoring.",
    sections: [
      {
        title: "Better visibility.",
        text:
          "Structured monitoring can create opportunities for greater visibility into horse welfare and activity.",
      },
      {
        title: "Support welfare initiatives.",
        text:
          "Data can complement existing approaches to welfare oversight and responsible horse management.",
      },
      {
        title: "Build for the future.",
        text:
          "EquiKai is designed with the potential to support a more connected and data-informed equestrian ecosystem.",
      },
    ],
  },

  "equestrian-connoisseurs": {
    title: "Equestrian Connoisseurs",
    eyebrow: "FOR EQUESTRIAN CONNOISSEURS",
    imageLabel: "Equestrian Connoisseurs Image",
    description:
      "For people who have a deep appreciation for horses and expect a high standard of care, EquiKai adds another layer of visibility.",
    sections: [
      {
        title: "Care with greater visibility.",
        text:
          "For those who care deeply about their horses, having more information can provide greater confidence in everyday care.",
      },
      {
        title: "Stay informed.",
        text:
          "EquiKai brings health, movement and location information together so important changes are easier to notice.",
      },
      {
        title: "Because every horse matters.",
        text:
          "EquiKai exists around a simple idea: better information can help people provide better care.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(useCases).map((slug) => ({
    slug,
  }));
}

export default async function UseCaseDetailPage({ params }) {
  const { slug } = await params;

  const useCase = useCases[slug];

  if (!useCase) {
    notFound();
  }

  return (
    <main>
      {/* HERO */}
      <section className="use-case-detail-hero">
        <div className="container">
          <p className="eyebrow">{useCase.eyebrow}</p>

          <h1>{useCase.title}</h1>

          <p>{useCase.description}</p>
        </div>
      </section>

      {/* IMAGE PLACEHOLDER */}
      <section className="section use-case-detail-intro">
        <div className="container">
          <div className="large-use-case-placeholder">
            <div>
              <span>IMAGE PLACEHOLDER</span>

              <strong>{useCase.imageLabel}</strong>

              <small>
                Replace this with the final image for this use case.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* TAILORED CONTENT */}
      <section className="section use-case-benefits">
        <div className="container">
          <div className="use-case-benefits-heading">
            <p className="eyebrow">WHY EQUIKAI</p>

            <h2>Designed around their needs.</h2>
          </div>

          <div className="use-case-benefits-list">
            {useCase.sections.map((section, index) => (
              <article key={section.title}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRE CTA */}
      <section className="section use-case-inquire">
        <div className="container">
          <div className="use-case-inquire-card">
            <div>
              <p className="eyebrow">INTERESTED IN EQUIKAI?</p>

              <h2>
                Let's talk about EquiKai for {useCase.title.toLowerCase()}.
              </h2>

              <p>
                Tell us what you are looking for and our team can continue the
                conversation with you.
              </p>
            </div>

            <Link href={`/contact?useCase=${slug}`} className="button button-primary">
              Inquire about EquiKai
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}