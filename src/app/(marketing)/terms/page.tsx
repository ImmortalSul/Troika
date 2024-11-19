import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Link from "next/link";

const TermsPage = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Terms and Conditions
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                    Last updated: 10th November 2024
                </p>
                <p className="mt-4">
                    Welcome to Troika Hub. These terms and conditions outline the rules and regulations for the use of Troika Hub&apos;s website and services.
                </p>

                <h2 className="text-xl font-medium mt-8">
                    Acceptance of Terms
                </h2>

                <p className="mt-8 text-muted-foreground">
                    By accessing and using Troika Hub, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms, you may not use our website or services.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Changes to Terms
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Troika Hub reserves the right to modify these terms at any time. We will notify you of any changes by updating the &quot;Last updated&quot; date at the top of this page. Your continued use of our website and services after any modifications indicates your acceptance of the new terms.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Use of Services
                </h2>

                <h3 className="text-lg mt-8">
                    Eligibility
                </h3>
                <p className="mt-8">
                    To use Troika Hub, you must be at least 18 years old and capable of entering into a binding contract.
                </p>

                <h3 className="text-lg mt-8">
                    Account Registration
                </h3>
                <div className="mt-8">
                    <ul className="list-disc ml-8 text-muted-foreground">
                        <li>You must provide accurate and complete information during the registration process.</li>
                        <li>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                        <li>You agree to notify us immediately of any unauthorized use of your account.</li>
                    </ul>
                </div>

                <h3 className="text-lg mt-8">
                    Acceptable Use
                </h3>
                <div className="mt-8">
                    You agree not to use Troika Hub for any unlawful or prohibited activities, including but not limited to:
                    <ul className="list-disc text-muted-foreground ml-8">
                        <li>Uploading or sharing content that is offensive, harmful, or violates any laws.</li>
                        <li>Using the service to distribute spam or malicious content.</li>
                        <li>Attempting to gain unauthorized access to other user accounts or Troika Hub&apos;s systems.</li>
                    </ul>
                </div>

                <h2 className="text-xl font-medium mt-12">
                    Intellectual Property
                </h2>

                <h3 className="text-lg mt-8">
                    Content Ownership
                </h3>
                <p className="mt-8 text-muted-foreground">
                    All content provided on the Troika Hub platform, including text, graphics, logos, and software, is the property of Troika Hub or its content suppliers and is protected by intellectual property laws. You may not reuse content without proper authorization.
                </p>

                <h3 className="text-lg mt-8">
                    User-Generated Content
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You retain ownership of any content you create or upload to Troika Hub. By submitting content, you grant Troika Hub a non-exclusive, royalty-free license to use, reproduce, and display your content as necessary to provide our services.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Privacy and Data Protection
                </h2>

                <p className="mt-8 text-muted-foreground">
                    Your privacy is important to us. Please review our <Link href="/privacy" className="underline">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Termination of Services
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Troika Hub reserves the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to violation of these terms.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Disclaimers and Limitations of Liability
                </h2>

                <h3 className="text-lg mt-8">
                    No Warranties
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Troika Hub is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not warrant that the service will be uninterrupted, error-free, or free from viruses or other harmful components.
                </p>

                <h3 className="text-lg mt-8">
                    Limitation of Liability
                </h3>
                <p className="mt-8 text-muted-foreground">
                    In no event shall Troika Hub be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Governing Law
                </h2>
                <p className="mt-8 text-muted-foreground">
                    These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Contact Us
                </h2>
                <p className="mt-8 text-muted-foreground">
                    If you have any questions or concerns about these Terms and Conditions, please contact us at support@troikahub.tech.
                </p>

                <p className="mt-8 font-medium">
                    By using Troika Hub, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default TermsPage;
