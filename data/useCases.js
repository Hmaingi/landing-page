export const useCases = [
  {
    number: "01",
    slug: "horse-owners",
    label: "For Horse Owners",
    title: "Know your horse beyond what you can see.",
    shortDescription:
      "Stay connected to your horse’s health, movement, and location with continuous insights designed for everyday care.",
    image: "/assets/sarah-olive-x_RB1PF7ePA-unsplash.jpg",
    headline:
      "A clearer picture of your horse, even when you are not standing beside them.",
    body:
      "EquiKai gives horse owners a clearer view of the signals that can be difficult to observe throughout the day. Health, movement, and location data can help owners make more informed decisions around daily care, training, transport, and wellbeing.",
  },

  {
    number: "02",
    slug: "trainers",
    label: "For Trainers",
    title: "Turn training into measurable insight.",
    shortDescription:
      "Understand movement, recovery, and physiological patterns so training decisions are based on more than observation alone.",
    image: "/assets/bo-zhang-7R9Zvl472VM-unsplash.jpg",
    headline:
      "Better training decisions start with better information.",
    body:
      "EquiKai helps trainers bring health and movement information into the training process. By monitoring patterns across sessions, trainers can build a clearer picture of workload, recovery, and changes that may warrant closer attention.",
  },

  {
    number: "03",
    slug: "veterinarians",
    label: "For Veterinarians",
    title: "More context between clinical visits.",
    shortDescription:
      "Give veterinary teams access to continuous monitoring data that can add context to assessment, recovery, and follow-up.",
    image: "/assets/sarah-olive-x_RB1PF7ePA-unsplash.jpg",
    headline:
      "Clinical decisions benefit from what happens between visits.",
    body:
      "EquiKai is designed to provide additional context around a horse’s everyday health and activity. Continuous data can complement veterinary assessment by showing patterns that may not be visible during a single examination.",
  },

  {
    number: "04",
    slug: "breeders",
    label: "For Breeders",
    title: "Build better visibility around every horse.",
    shortDescription:
      "Monitor health and activity patterns across horses while building a more informed view of everyday wellbeing.",
    image: "/assets/bo-zhang-7R9Zvl472VM-unsplash.jpg",
    headline:
      "Better visibility supports better long-term care.",
    body:
      "For breeders managing multiple horses, EquiKai can help bring health, movement, and location information into one view. This creates additional context for everyday management and monitoring.",
  },

  {
    number: "05",
    slug: "insurance",
    label: "For Insurance",
    title: "Move toward data-informed risk.",
    shortDescription:
      "Explore how continuous horse health and activity data could support a more informed approach to equine risk.",
    image: "/assets/sarah-olive-x_RB1PF7ePA-unsplash.jpg",
    headline:
      "A more connected view of equine risk.",
    body:
      "EquiKai creates a potential data layer around the everyday health and activity of horses. For insurance stakeholders, this opens opportunities to explore more informed approaches to risk assessment and ongoing monitoring.",
  },

  {
    number: "06",
    slug: "regulators",
    label: "For Regulators",
    title: "Better visibility across the equestrian ecosystem.",
    shortDescription:
      "Support a more data-informed approach to animal welfare, oversight, and standards across equestrian environments.",
    image: "/assets/bo-zhang-7R9Zvl472VM-unsplash.jpg",
    headline:
      "Data can strengthen oversight without disrupting daily care.",
    body:
      "EquiKai can provide an additional source of information around horse health, movement, and activity. This could support future approaches to welfare monitoring, compliance, and industry oversight.",
  },

  {
    number: "07",
    slug: "equestrian-connoisseurs",
    label: "For Equestrian Connoisseurs",
    title: "For those who expect more from every ride.",
    shortDescription:
      "From riders and jockeys to polo players and competitors, EquiKai brings health and performance insight closer to the sport.",
    image: "/assets/sarah-olive-x_RB1PF7ePA-unsplash.jpg",
    headline:
      "When performance matters, so does understanding the horse behind it.",
    body:
      "Equestrian connoisseurs live closely with their horses and understand how subtle changes can affect performance. EquiKai brings additional health, movement, and location information into that relationship.",
  },
];

export function getUseCase(slug) {
  return useCases.find((item) => item.slug === slug);
}