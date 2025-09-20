"use client";

import React from "react";
import SettingsPageLayout from "@/components/settings/SettingsPageLayout.jsx";
import PolicySection from "@/components/shop-settings/PolicySection.jsx";
import { Button } from "@/components/ui/button.jsx";

const ShopPolicyPage = () => {
  const aboutUsContent = `Heading 1 Privacy Policy for Scalebiz

Welcome to Scalebiz! We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and disclose your information regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.

Information Collection and Use
While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, postal address, and phone number ("Personal Information").

Log Data
Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.

Cookies
Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.

Security
The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.

Changes to This Privacy Policy
This Privacy Policy is effective as of 2025-07-10 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide by and be bound by the modified Privacy Policy.
If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.

Contact Us
If you have any questions about this Privacy Policy, please contact us at info.scalebiz@gmail.com.`;

  const termsAndConditionsContent = `Heading 1 Terms and Conditions for Scalebiz

Last updated: 2025-07-10

These Terms and Conditions ("Terms") form a legally binding agreement between you ("Service") operated by Scalebiz ("we", "us", or "our").

1. Acceptance of Terms. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the Service.

2. Accounts. When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.

3. Product Information. We strive to display as accurately as possible the colors, features, specifications, and details of the products available on our website. However, we do not guarantee that the colors, information, or other content of the Service is accurate, complete, reliable, current, or error-free.

4. Pricing and Payment. All prices are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.

5. Shipping and Delivery. We will deliver products based on the delivery time you will see. If there is no delay in shipping or delivery due to force majeure events or other reasons beyond our control, we will inform you.

6. Returns and Refunds. For information on returns and refunds, please refer to our Return and Cancellation Policy.

7. Intellectual Property. The Service and its original content, features, and functionality are and will remain the exclusive property of Scalebiz and its licensors.

8. Links to Other Websites. Our Service may contain links to third-party websites or services that are not owned or controlled by Scalebiz. Scalebiz has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.

9. Governing Law. These Terms shall be governed and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.

10. Changes. We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

Contact Us
If you have any questions about these Terms, please contact us at info.scalebiz@gmail.com.`;

  const returnCancellationContent = `Heading 1 Return and Cancellation Policy for Scalebiz

Last updated: 2025-07-10

This Return and Cancellation Policy governs the refund process for Scalebiz. Please read the policy carefully. Your satisfaction is our priority, and we want to ensure a transparent and hassle-free experience.

1. Refund policy
We only refund products and services that meet or exceed your expectations. If, for any reason, you are not completely satisfied with your purchase, you may be entitled to a refund.

Damaged or Defective Products: If you receive a damaged or defective product, please contact our customer service team as soon as possible to receive the item. We will arrange for a replacement or refund, depending on your preference and product availability.

Incorrect Items: If you receive an incorrect item, please notify us as soon as possible of receiving the product. We will arrange for the correct item to be shipped to you, or provide a refund if the correct item is unavailable.

Non-Refundable Items: Certain items, such as personalized or customized products, may not be eligible for a refund unless they are damaged or defective.

2. Return policy
We do not accept returns for products that are not damaged or defective. If you receive a damaged or defective product, please contact our customer service team as soon as possible to receive the item. We will arrange for a replacement or refund, depending on your preference and product availability.

3. Cancellation policy
You may cancel your order as soon as possible, provided that the order has not already been processed or shipped. To cancel an order, please contact customer service immediately. If the order has already been processed, you may no longer be able to cancel. You may return the items.

Contact Us
If you have any questions about our Refund, Return, and Cancellation Policy, please contact us at info.scalebiz@gmail.com.`;

  return (
    <SettingsPageLayout title="Shop Policy">
      <PolicySection
        title="About Us"
        lastUpdated="2025-07-10"
        content={aboutUsContent}
      />
      <PolicySection
        title="Terms and Conditions"
        lastUpdated="2025-07-10"
        content={termsAndConditionsContent}
      />
      <PolicySection
        title="Return and Cancellation Policy"
        lastUpdated="2025-07-10"
        content={returnCancellationContent}
      />
    </SettingsPageLayout>
  );
};

export default ShopPolicyPage;