import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "asdfds",
      label: "Can I use react on a project?",
      content:
        "You can use react on any project that you want.You can use react on any project that you want.You can use react on any project that you want.You can use react on any project that you want.",
    },
    {
      id: "12dfds",
      label: "Can I use react on a scalable project?",
      content:
        "You can use react on any project that you want.You can use react on any project that you want.You can use react on any project that you want.You can use react on any project that you want.",
    },
    {
      id: "lkdfds",
      label: "Is react better than others?",
      content:
        "You can use react on any project that you want.You can use react on any project that you want.You can use react on any project that you want.You can use react on any project that you want.",
    },
    {
      id: "asd34d",
      label: "Is React a Library or a Framework?",
      content:
        "You can use react on any project that you want.You can use react on any project that you want.You can use react on any project that you want.You can use react on any project that you want.",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
