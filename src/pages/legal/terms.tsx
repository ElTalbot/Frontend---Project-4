import React from "react";
import quals from "../../assets/certs.png";
import "./legal.scss";

import { Link } from "react-router-dom";

function Terms() {
  return (
    <section className="legal">
      <h1 className="legal__header">Terms and Conditions</h1>
      {/* --------INTRO */}
      <div className="legal__section">
        <h2>Introduction</h2>
        <p>
          These Terms and Conditions ("Agreement") govern the use of Owlcore’s
          fitness sessions and online booking platform 'the provider' . By using
          Owlcore’s 'the provider' Services, you 'the user' agree to be bound by
          these Terms and Conditions. If you 'the user' does not agree with
          these Terms and Conditions, you 'the Customer' may not use Owlcore’s
          'the provider' Services. <br />
          <br />
          By participating in any fitness session provided by Owlcore 'the
          provider', you 'the user' agree to the following terms and conditions:
        </p>
      </div>
      {/* --------SERVICES */}
      {/* --------1. */}
      <div className="legal__section">
        <h2>Services</h2>
        <br />
        <h3>1. Physical Condition and Health</h3>
        <br />
        <p>
          <span className="legal__bold">1.1&nbsp; </span>You 'the user' must be
          in good physical condition and have no medical condition that would
          make it dangerous to participate in any fitness session. You 'the
          user' agree to inform Owlcore 'the provider' of any medical conditions
          or physical limitations that may affect your ability to participate in
          the fitness session.
        </p>
        <br />
        <p>
          <span className="legal__bold">1.2&nbsp; </span>Owlcore’s 'the
          Provider' fitness sessions are designed to provide a safe and
          effective workout for individuals of all fitness levels. By
          participating in Owlcore’s fitness sessions, you 'the user'
          acknowledge that your have consulted with your doctor and have been
          cleared for physical activity.
        </p>
        <br />
        <p>
          <span className="legal__bold">Assumption of Risk&nbsp; </span>
        </p>
        <br />
        <p>
          <span className="legal__bold">1.3&nbsp; </span>You 'the user'
          understand that participating in any fitness session involves a risk
          of injury, including the risk of serious injury or death. You
          voluntarily assume all risks of participating in the fitness session,
          including the risk of any injury or death.
        </p>
      </div>
      {/* --------2 */}
      <div className="legal__section">
        <h3>Booking Process</h3>
        <br />
        <p>
          <span className="legal__bold">2.1.&nbsp; </span>Our 'the provider'
          online booking platform allows you 'the user' to reserve a spot in one
          of Owlcore’s fitness sessions. You 'the user' may only book sessions
          for yourself by selecting the preferred date, time, and location. You
          may not book sessions for anyone else.
        </p>
        <br />
        <p>
          <span className="legal__bold">2.2.&nbsp; </span>You 'the user' must
          provide accurate and complete information when making a booking
          through the online booking platform.
        </p>
        <br />
        <p>
          <span className="legal__bold">2.3.&nbsp; </span>You 'the user' must
          ensure that you have provided accurate and complete payment
          information.
        </p>
        <br />
        <p>
          <span className="legal__bold">2.4.&nbsp; </span>Owlcore 'the provider'
          reserves the right to cancel or refuse any booking made through the
          online booking platform.
        </p>
        <br />
        <p>
          <span className="legal__bold">2.5.&nbsp; </span> You 'the user' must
          be at least 18 years old to use the Owlcore’s 'the provider' Platform.
        </p>
      </div>
      {/* --------PAYMENT */}
      <div className="legal__section">
        <h2>Payment</h2>
        <br />
        <h3>
          <span className="legal__bold">
            Payment for fitness sessions must be made within at least 1 week of
            the class in question via bank transfer preferably
          </span>
        </h3>
        <br />
        {/* --------3. */}
        <h3>3. Cancellations and Refunds</h3>
        <br />
        <p>
          <span className="legal__bold">3.1.&nbsp; </span>You 'the user' may
          cancel a booking up to 24 hours before the scheduled start time of the
          fitness session and will not be required to pay in full
        </p>
        <br />
        <p>
          <span className="legal__bold">3.2.&nbsp; </span>If you 'the user'
          cancel a booking within 24 hours of the scheduled start time of the
          fitness session, you 'the user' will be required to pay for the
          scheduled session in full.
        </p>
        <br />
        <p>
          <span className="legal__bold">3.3.&nbsp; </span>If you 'the user'
          speak to Owlcore 'the provider' regarding the reasons behind a
          cancellation occurring within 24hours of a scheduled fitness session
          and if Owlcore 'the provider' deems this as an extenuating
          circumstance you 'the user' will not be required to pay in full.
        </p>
        <br />
        <p>
          <span className="legal__bold">3.4.&nbsp; </span>Cancellations must be
          made through Owlcore 'the provider' online booking platform or via a
          direct communication to Owlcore's email hello@owlcore.co.uk
        </p>
      </div>
      {/* --------4. */}
      <div className="legal__section">
        <h3>4. Liability</h3>
        <br />
        <p>
          <span className="legal__bold">4.1.&nbsp; </span>Participation in
          Owlcore’s 'the provider' fitness sessions is at your 'the user' own
          risk. Owlcore 'the provider' are not liable for any injuries or
          damages that may occur as a result from your 'the user' use of the
          platform or your 'the user' participation in Owlcore’s 'the provider'
          fitness sessions
        </p>
        <br />
        <p>
          <span className="legal__bold">4.2.&nbsp; </span> By participating in
          Owlcore’s 'the provider' fitness sessions, you 'the user' acknowledge
          these fitness sessions involve inherent risks and you 'the user'
          assume all such risks associated with the physical activity associated
          with participating with the aforementioned fitness sessions.
        </p>
        <br />
        <p>
          <span className="legal__bold">4.3.&nbsp; </span> Owlcore 'the
          provider' is not liable for any acts or omissions of any fitness
          instructors instructing on behalf of Owlcore 'the provider'.
        </p>
        <br />
        <p>
          <span className="legal__bold">4.4.&nbsp; </span> You 'the user' agree
          to release, indemnify, and hold harmless Owlcore 'the provider' from
          any and all claims, demands, causes of action, damages, or liabilities
          of any kind arising from or related to your 'the user' participation
          in the fitness session, including any injury or death.
        </p>
        <br />
        <p>
          <span className="legal__bold">4.5.&nbsp; </span> Owlcore 'the
          provider' is not liable for any loss or damage resulting from the use
          of the online booking platform.
        </p>
        <br />
        <p>
          <span className="legal__bold">4.6.&nbsp; </span> Owlcore 'the
          provider' is not liable for any loss or damage resulting from the
          cancellation or refusal of any booking made through the online booking
          platform.
        </p>
        <br />
        <p>
          <span className="legal__bold">Personal Responsibility&nbsp; </span>{" "}
        </p>
        <br />
        <p>
          <span className="legal__bold">4.7&nbsp; </span> You 'the user' are
          solely responsible for your own safety during the fitness session. You
          agree to follow all instructions given by any instructor representing
          Owlcore 'the provider' and to use your 'the user' own judgment when
          participating in any exercises or activities carried out by Owlcore.
        </p>
      </div>
      {/* --------5. */}
      <div className="legal__section">
        <h3>5. Intellectual Property</h3>
        <br />
        <p>
          <span className="legal__bold">5.1.&nbsp; </span>All content and
          materials provided as part of Owlcore 'the provider' Services,
          including but not limited to logos, text, graphics, images, and
          software, are the property of our 'the provider' company or our
          licensors and are protected by copyright, trademark, and other
          intellectual property laws.
        </p>
        <br />
        <p>
          <span className="legal__bold">5.2.&nbsp; </span>Owlcore 'the provider'
          retains all intellectual property rights in the online booking
          platform.
        </p>
        <br />
        <p>
          <span className="legal__bold">5.3.&nbsp; </span>You 'the user' may not
          reproduce, distribute, modify or create derivative works of any
          content or materials on any part of the online booking platform
          without Owlcore’s 'the provider' prior written consent.
        </p>
        <br />
        <p>
          <span className="legal__bold">5.4.&nbsp; </span>Owlcore’s 'the
          provider' online booking platform and all content and materials on the
          platform are the exclusive property of Owlcore 'the provider'.
        </p>
      </div>
      {/* --------6. */}
      <div className="legal__section">
        <h3>6. Termination</h3>
        <br />
        <p>
          <span className="legal__bold">6.1.&nbsp; </span>We 'the provider'
          reserve the right to terminate your 'the user' use of the Owlcore’s
          'the provider' Services at any time and for any reason without notice.
        </p>
        <br />
        <p>
          <span className="legal__bold">6.2.&nbsp; </span>Upon termination, you
          'the user' must immediately cease all use of the online booking
          platform and not attend any fitness sessions carried out under the
          instruction of Owlcore 'the provider'
        </p>
      </div>
      {/* --------7. */}
      <div className="legal__section">
        <h3>7. Governing Law</h3>
        <br />
        <p>
          <span className="legal__bold">7.1.&nbsp; </span>These Terms and
          Conditions shall be governed by and construed in accordance with the
          laws of the United Kingdom.
        </p>
        <br />
        <p>
          <span className="legal__bold">7.2.&nbsp; </span>Any legal action
          arising out of or relating to these Terms and Conditions shall be
          subject to the exclusive jurisdiction of the courts of the United
          Kingdom.
        </p>
      </div>
      {/* --------8. */}
      <div className="legal__section">
        <h3>8. Changes to Terms and Conditions</h3>
        <br />
        <p>
          <span className="legal__bold">8.1.&nbsp; </span>Owlcore 'the provider'
          reserve the right to update or modify these Terms and Conditions at
          any time and will notify relevant users accordingly at least 7 days
          prior to the changes being implemented. Your 'the user' continued use
          of the Services after any such changes constitutes your acceptance of
          the new Terms and Conditions.
        </p>
      </div>
      {/* --------8. */}
      <div className="legal__section">
        <h3>9. Consent to use of Image</h3>
        <br />
        <p>
          <span className="legal__bold">9.1.&nbsp; </span>You 'the user' consent
          to the use of your name and image in any photographs, videos, or other
          recordings taken during the Owlcore’s 'the provider' fitness session
          for promotional purposes.
        </p>
        <br />
        <h2>Contact Us</h2>
        <br />
        <p>
          If you have any questions or queries regarding any part of these Terms
          and Conditions, please contact us at hello@owlcore.co.uk
        </p>
        <br />
        <h2>Conclusion</h2>
        <br />
        <p>
          The use of Owlcore’s 'the provider' online booking platform and
          Owlcore fitness sessions is subject to the terms and conditions
          outlined above. By participating in our 'the provider fitness sessions
          and using our online booking platform, you 'the user' agree to abide
          by these terms and conditions. Owlcore 'the provider' strive to
          provide a safe and welcoming environment for all of our customers, and
          we 'the provider' appreciate your 'the user' cooperation in helping us
          'the provider' maintain these standards.
        </p>
      </div>
    </section>
  );
}

export default Terms;
