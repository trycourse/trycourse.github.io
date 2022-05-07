export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/ryzenen/ryzenen/main/20220411_195757.png",
      name: "Discord Bot Language System",
      description:
        "© Ryzenen. All rigths reserved. (Discord Bot Language System)!",
      link: "https://github.com/ryzenen/Discord-Bot-Language-System",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    }
  ];
  res.status(200).json(data);
};
