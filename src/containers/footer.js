import React from "react";
import { Footer } from "../components";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us</Footer.Title>
      <Footer.Break></Footer.Break>

      <Footer.Row>
        <Footer.Column>
          <Footer.Link
            id={1}
            name="footer-link-1"
            href="https://help.netflix.com/en/node/412"
          >
            FAQ
          </Footer.Link>
          <Footer.Link
            id={2}
            name="footer-link-2"
            href="http://ir.netflix.com/"
          >
            Investor Relations
          </Footer.Link>
          <Footer.Link
            id={3}
            name="footer-link-3"
            href="https://help.netflix.com/legal/privacy"
          >
            Privacy
          </Footer.Link>
          <Footer.Link id={4} name="footer-link-4" href="https://fast.com/#">
            Speed Test
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link
            id={5}
            name="footer-link-5"
            href="https://help.netflix.com/"
          >
            Help Centre
          </Footer.Link>
          <Footer.Link
            id={6}
            name="footer-link-6"
            href="https://jobs.netflix.com/"
          >
            Jobs
          </Footer.Link>
          <Footer.Link id={7} name="footer-link-7" href="#">
            Cookie Preferences
          </Footer.Link>
          <Footer.Link
            id={8}
            name="footer-link-8"
            href="https://help.netflix.com/legal/notices"
          >
            Legal Notices
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link id={9} name="footer-link-9" href="#">
            Account
          </Footer.Link>
          <Footer.Link id={10} name="footer-link-10" href="#">
            Ways to Watch
          </Footer.Link>
          <Footer.Link id={11} name="footer-link-11" href="#">
            Corporate Information
          </Footer.Link>
          <Footer.Link id={12} name="footer-link-12" href="#">
            Only on Netflix
          </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link id={13} name="footer-link-13" href="#">
            Media Centre
          </Footer.Link>
          <Footer.Link id={14} name="footer-link-14" href="#">
            Terms of Use
          </Footer.Link>
          <Footer.Link id={15} name="footer-link-15" href="#">
            Contact Us
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break></Footer.Break>
      <Footer.Text>Netflix India</Footer.Text>
    </Footer>
  );
}
