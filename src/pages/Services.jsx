import Container from "@material-ui/core/Container";
// import ServicesBody from "components/servicesComponent/ServicesBody";
// import ServicesHero from "components/servicesComponent/ServicesHero";
import PageTitle from "components/pageTitle/PageTitle";
import GetStarted from "components/servicesComponent /GetStarted";
import ServicesBody from "components/servicesComponent /ServicesBody";
import ServicesHero from "components/servicesComponent /ServicesHero";

const Expertise = () => {
  return (
    <div>
      <PageTitle currentPage="Services" />
      <Container>
        <ServicesHero />
        <ServicesBody
          headings="Application/Software Development"
          detailsOne="Do you have visibility into your company’s end-to-end processes? How do you detect and respond to business events as they occur throughout your enterprise? If you are noncompliant with regulations or internal controls, what will it cost your business? When you account for the cost of inefficiency, declining customer satisfaction and lost business, what is the price of not automating your processes?"
          detailsTwo="Business Process Automation (BPA) leverages software and services to provide total visibility into your organization. Discover, document, automate, and continuously improve business processes to increase efficiency and reduce costs. To get started with BPA, you must be focused on delivering business value. Take an incremental approach that allows you to quickly prove value with a single project, build competency and skills, and extend across the enterprise."
        />
        <ServicesBody
          headings="Digital strategy development and Implementation"
          detailsOne="The best collaboration solutions combine a communication and project management approach that emphasizes teamwork, innovative thinking, and equal participation to achieve organisational objectives. Collaboration solutions help people work smarter and drive business benefits by deepening valuable relationships, making better decisions faster, spurring innovation, and reducing costs."
          detailsTwo="Our Alliance partnerships with Atlassian, Microsoft, and others give us a solid platform to offer you best-in-classname collaboration solutions."
        />
        <GetStarted
          headings="Ready to get started?"
          detailsOne="We'd love to find out more about you, your business, and your current projects. One of our team members will get back to you shortly and set up a call to discuss your needs further. Work with us"
        />
      </Container>
    </div>
  );
};

export default Expertise;
