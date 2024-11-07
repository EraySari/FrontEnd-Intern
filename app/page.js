import MidSection from "./_components/middleImage/MidSection";
import HomeBgSection from "./_components/home/HomeBgSection";
import TeamSection from "./_components/team/TeamSection";
import Metrics from "./_components/metrics/Metrics";
import ContactSection from "./_components/contact/ContactSection";
import Into from "./_components/MiddleText/Into";

function Page() {
  return (
    <>
      <HomeBgSection />
      <Into />
      <MidSection />
      <TeamSection />
      <Metrics />
      <ContactSection />
    </>
  );
}

export default Page;
