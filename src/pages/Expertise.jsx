import Container from "@material-ui/core/Container";
import ExpertiseBody from "components/expertiseComponent/ExpertiseBody";
import ExpertiseHero from "components/expertiseComponent/ExpertiseHero";
import PageTitle from "components/pageTitle/PageTitle";

const Expertise = () => {
  return (
    <div>
      <PageTitle currentPage="Expertise" />
      <Container>
        <ExpertiseHero />
        <ExpertiseBody
          headings="Business Process Automation & Management"
          detailsOne="Do you have visibility into your company’s end-to-end processes? How do you detect and respond to business events as they occur throughout your enterprise? If you are noncompliant with regulations or internal controls, what will it cost your business? When you account for the cost of inefficiency, declining customer satisfaction and lost business, what is the price of not automating your processes?"
          detailsTwo="Business Process Automation (BPA) leverages software and services to provide total visibility into your organization. Discover, document, automate, and continuously improve business processes to increase efficiency and reduce costs. To get started with BPA, you must be focused on delivering business value. Take an incremental approach that allows you to quickly prove value with a single project, build competency and skills, and extend across the enterprise."
          detailsThree="At integral iT, we can help you chart your own roadmap to business process automation success that meets your businesse's unique needs, on budget and on time."
        />
        <ExpertiseBody
          headings="Collaboration Management"
          detailsOne="The best collaboration solutions combine a communication and project management approach that emphasizes teamwork, innovative thinking, and equal participation to achieve organisational objectives. Collaboration solutions help people work smarter and drive business benefits by deepening valuable relationships, making better decisions faster, spurring innovation, and reducing costs."
          detailsTwo="Our Alliance partnerships with Atlassian, Microsoft, and others give us a solid platform to offer you best-in-classname collaboration solutions."
        />
        <ExpertiseBody
          headings=" Workforce Productivity Management"
          detailsOne="To optimize workforce productivity, employees should be provided with the integrated tools he or she needs to access information and work efficiently. To manage costs, IT needs to deliver these tools while minimizing integration, deployment, and management expense."
          detailsTwo="The answer is personalised web-based user dashboards which give each user personalized access to tools, data, and applications necessary to do his or her job and manage interactions with colleagues, customers, and business partners – all delivered together within a familiar, unified browser interface."
          detailsThree="Integral iT will develop a platform that not only gives your employees the applications, tools, and documents they need to effectively do their jobs in personalised dashboards, but also monitors the work they do and applications they do in their company issued PCs with time tracking and periodic screenshots. Comprehensive daily reports are sent to Admin/HR."
        />
      </Container>
    </div>
  );
};

export default Expertise;
