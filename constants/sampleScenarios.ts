// constants/sampleScenarios.ts

export interface SampleScenario {
  id: number;
  title: string;
  context: string;
  prompt: string;
  category: 'GBV' | 'Migration' | 'Government Services';
}

export const SAMPLE_SCENARIOS: SampleScenario[] = [
  {
    id: 1,
    title: "Child Custody & Protection from Abuse",
    category: "GBV",
    context: "A survivor of domestic violence with young children needs legal information about safely leaving an abusive relationship while protecting their children.",
    prompt: "I'm planning to leave my abusive spouse. We have young children. How do I find legal information about child custody, separation, and the protection of my children's rights? What steps do I need to take to file for custody, and can you link me to free legal aid services?"
  },
  {
    id: 2,
    title: "Asylum Permit Expiration & Deportation",
    category: "Migration",
    context: "A person whose spouse has been detained by police due to expired asylum documentation needs information about legal protections and rights.",
    prompt: "The police took my husband because his asylum permit expired. Is it legal for them to deport him immediately? What legal laws, etc. can I use to show that I'm informed and he is protected by law? How can I contact legal aid or UNHCR?"
  },
  {
    id: 3,
    title: "Asylum Registration Process in Germany",
    category: "Migration",
    context: "A newly arrived asylum seeker in Germany needs comprehensive information about the registration process and requirements.",
    prompt: "I just arrived in Germany as an asylum seeker. Where do I register officially, what documents do I need, what questions should I expect during the interview and what happens if I miss the appointment?"
  },
  {
    id: 4,
    title: "Maternity Benefits Dispute in Kenya",
    category: "Government Services",
    context: "An employee in Kenya whose employer is refusing to pay mandated maternity benefits needs information about legal rights and complaint procedures.",
    prompt: "I gave birth and my employer refuses to pay my maternity benefits. What does the Kenyan Employment Act say? How do I complain to the Labour Offices, and what is the contact number?"
  },
  {
    id: 5,
    title: "Domestic Violence Leave in California",
    category: "Government Services",
    context: "A domestic violence survivor in California needs information about taking time off work for trauma while protecting their privacy.",
    prompt: "I need to take time off work because of domestic violence and mental trauma. Can I apply for Paid Family Leave or Safe Leave in California? What forms do I file with my employer and EDD? Will my employer know the reason?"
  },
  {
    id: 6,
    title: "Work Authorization for Asylum Seekers in Italy",
    category: "Migration",
    context: "An asylum seeker in Italy who applied two months ago wants to know about work authorization eligibility and application process.",
    prompt: "I applied for asylum in Italy two months ago. Am I allowed to work yet? If yes, what application or permit do I need?"
  },
  {
    id: 7,
    title: "Unemployment Benefits After Leaving Abusive Job",
    category: "GBV",
    context: "A domestic violence survivor in France who left their job to escape violence needs information about unemployment benefit eligibility.",
    prompt: "I left my job to escape domestic violence — can I still qualify for unemployment benefits (Pôle emploi)? What documents do I need to prove 'legitimate resignation'? Can a social worker or shelter help me file?"
  },
  {
    id: 8,
    title: "Tax Filing Without Social Security Number",
    category: "Migration",
    context: "A migrant worker with work authorization but no Social Security Number needs guidance on tax filing procedures in the US.",
    prompt: "I received work authorization and I'm working. How do I file taxes without a Social Security Number? Should I apply for an ITIN? What IRS forms do I need, and are there free tax clinics that help immigrants?"
  },
  {
    id: 9,
    title: "Safe Exit Planning from Domestic Violence",
    category: "GBV",
    context: "A domestic violence survivor with children needs comprehensive safety planning and resource information for leaving an abusive relationship.",
    prompt: "I want to leave but I'm worried about retaliation, and I don't know where to go with my children and how to make sure I have documents and money. Could you help me create a safe exit checklist, tell me what local shelters or hotlines exist in my region, and what I should prepare in advance?"
  },
  {
    id: 10,
    title: "Migrant Domestic Violence & Immigration Status",
    category: "GBV",
    context: "A migrant experiencing domestic violence whose partner uses their visa status as a form of control needs information about rights and resources.",
    prompt: "I'm a migrant in a country far from home, my partner uses my visa status to control me and threatens deportation. How can I find services that help migrant survivors of abuse, what are my rights, and where can I get help without risking exposure or deportation?"
  }
];