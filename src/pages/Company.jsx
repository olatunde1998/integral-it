import Container from "@material-ui/core/Container";
import Alliance from "components/companyComponent/Alliance";
import Approach from "components/companyComponent/Approach";
import CompanyBody from "components/companyComponent/CompanyBody";
import CompanyHero from "components/companyComponent/CompanyHero";
import Typography from "@material-ui/core/Typography";
import PageTitle from "components/pageTitle/PageTitle";

const Company = () => {
  return (
    <div>
      <PageTitle currentPage="About Us"/>
      <Container>
        <CompanyHero />
        <Typography
          variant="h5"
          style={{ fontWeight: "800", marginBottom: "20px", marginTop: "80px" }}
        >
          Vision and Mission statement
        </Typography>
        <CompanyBody
          headings="Our Mission"
          detailsOne="Our aim is to consistently offer relevant, innovative, and cutting-edge technology solutions to our clients, achieving this by empowering our people with the confidence, knowledge, and skills they need to differentiate themselves."
        />
        <CompanyBody
          headings=" Our Vision"
          detailsOne="Our ambition is to be one of the leading business technology solutions providers in Africa."
        />
        <Approach
          headings="Our Approach"
          detailsOne="In our commitment to ensure the delivery of optimal technology solutions to our clients, we typically start our design process by thoroughly assessing and articulating your business requirements and budget, keeping them as guidelines throughout the technical solution design process."
          detailsTwo="As an Integral iT client, you are guaranteed an optimal technical solution that takes not only your business requirements into cognisance, but also your financial commitment."
        />
        <Alliance
          headings="Industry Alliances"
          detailsOne="At Integral iT, we believe that each solution is constructed for your unique environment. Integral iT leverages its alliance relationships to provide the best and most appropriate solutions for our clientele. Our established partnerships with several innovative technology leaders enable us to leverage on their expertise to design and implement bespoke solutions and services for our clients."
        />
      </Container>
    </div>
  );
};

export default Company;
