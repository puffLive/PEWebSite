const SOCIAL_TITLE = ["Instagram", "Facebook", "TicTok", "Youtube"];

const SOCIAL_LINKS = [
  "https://www.instagram.com/principle_evolution/",
  "https://www.facebook.com/groups/2433360566948840/",
  "https://www.tiktok.com/@pe_builds",
  "https://www.youtube.com/channel/UCoDN1uEC5i8dANtxwI-Ae4w",
];

const CONTENT = `
<h4>Project Brief</h4>
<br/>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>

<br/>
<br/>

<h4>How We Work</h4>
<br/>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<br/>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>

<br/>
<br/>
<h4>Results</h4>
<br/>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>
`;

const SOCIAL_TAGS = ["Virtual", "Virtual", "Virtual", "Virtual"];

const DATE_CREATED = [
  "12APR2024",
  "15JAN2024",
  "25DEC2023",
  "12DEC2023",
  "04NOV2023",
  "11SEP2023",
];

const SOCIAL_DESCRIPTION = [
  "This event is to discuss the bus trip and to answer any questions that anyone may have.",
  "We post a lot of our progress online on social media sites so people can follow our journey.",
  "We post a lot of our progress online on social media sites so people can follow our journey.",
  "We post a lot of our progress online on social media sites so people can follow our journey.",
];

export const Socials = SOCIAL_TITLE.map((_, index) => {
  const galleryImgs = [
    `/assets/images/marketing/marketing_${0}.jpg`,
    `/assets/images/marketing/marketing_${1}.jpg`,
    `/assets/images/marketing/marketing_${2}.jpg`,
    `/assets/images/marketing/marketing_${3}.jpg`,
    `/assets/images/marketing/marketing_${4}.jpg`,
    `/assets/images/marketing/marketing_${5}.jpg`,
  ];

  return {
    id: new Date().valueOf(),
    content: CONTENT,
    title: SOCIAL_TITLE[index],
    category: SOCIAL_TAGS[index],
    createdAt: DATE_CREATED[index],
    website: SOCIAL_LINKS[index],
    description: SOCIAL_DESCRIPTION[index],
    heroUrl: "/assets/images/marketing/marketing_post_hero.jpg",
    coverUrl: `/socialImgs/social_logo_${index + 1}.png`,
    how_we_work:
      "Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi",
    results:
      "Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi",
    galleryImgs,
  };
});
