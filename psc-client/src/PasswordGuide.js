import React from 'react';
import { Tabs, Tab, Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PasswordGuide = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Password Security Guide</h1>
      <Tabs defaultActiveKey="tips" id="password-security-tabs" className="mb-3">
        <Tab eventKey="tips" title="Tips & Tricks">
          <Card>
            <Card.Body>
              <h3>Password Tips and Tricks</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>Use a combination of uppercase and lowercase letters, numbers, and symbols</ListGroup.Item>
                <ListGroup.Item>Create a pattern with a mix of unrelated words, numbers, and special characters that only make sense to you</ListGroup.Item>
                <ListGroup.Item>Make your password at least 12 characters long</ListGroup.Item>
                <ListGroup.Item>Avoid using personal information in your passwords</ListGroup.Item>
                <ListGroup.Item>Use a unique password for each account</ListGroup.Item>
                <ListGroup.Item>Consider using a password manager to generate and store complex passwords</ListGroup.Item>
                <ListGroup.Item>Always enable Two-Factor Authentication (2FA) wherever possible to add an extra layer of security</ListGroup.Item>
                <ListGroup.Item>Use services like <a href='https://haveibeenpwned.com/' target='_blank' rel="noopener noreferrer"> Have I Been Pwned</a> to check if your passwords have been exposed in data breaches</ListGroup.Item>
                <ListGroup.Item>Never share your passwords with anyone, even people you trust</ListGroup.Item>
                <ListGroup.Item>If you must share access, use secure tools like password managers with sharing features instead of directly revealing your password</ListGroup.Item>
                <ListGroup.Item>Be cautious of unsolicited emails or messages asking for your login details</ListGroup.Item>
                <ListGroup.Item>Enable biometric authentication (fingerprint, facial recognition) as an additional security measure where supported</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="strong" title="Creating Strong Passwords">
          <Card>
            <Card.Body>
              <h3>How to Create Strong Passwords</h3>
              <p>Follow these steps to create a strong password:</p>
              <ol>
                <li>Determine the Length of Your Password. Aim for at least 12 characters.</li>
                <li>Mix Different Types of Characters. Include uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), and special characters (@, #, $, %, etc.).</li>
                <li>Avoid Using Easily Guessable Information like names, birthdates, or common words.</li>
                <li>Create a Passphrase or Use Random Words.</li>
                <li>Incorporate Non-Obvious Patterns.</li>
                <li>Avoid Common Substitutions like replacing "a" with "@" or "o" with "0".</li>
                <li>Enable Two-Factor Authentication (2FA) wherever possible.</li>
                <li>Test the Strength of Your Password by using reputable tools or password managers to check the strength of your password.</li>
                <li>Store Your Password Securely by using a secure password manager rather than writing them down or saving them in an unsecured digital file.</li>

              </ol>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="poor" title="Poor Practices">
          <Card>
            <Card.Body>
              <h3>Common Poor Password Practices</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>Using common words or phrases (e.g., "password", "123456")</ListGroup.Item>
                <ListGroup.Item>Reusing passwords across multiple accounts</ListGroup.Item>
                <ListGroup.Item>Using personal information (birthdays, names) in passwords</ListGroup.Item>
                <ListGroup.Item>Writing passwords down on paper or in unsecured digital notes</ListGroup.Item>
                <ListGroup.Item>Sharing passwords with others</ListGroup.Item>
                <ListGroup.Item>Using short passwords, often fewer than 8 characters</ListGroup.Item>
                <ListGroup.Item>Failing to change default passwords on devices or accounts</ListGroup.Item>
                <ListGroup.Item>Not enabling Two-Factor Authentication (2FA) when it is available</ListGroup.Item>
                <ListGroup.Item>Allowing your web browser to save passwords</ListGroup.Item>
                <ListGroup.Item>Replacing letters with common symbols or numbers in an otherwise weak password (e.g., "P@ssw0rd")</ListGroup.Item>
                <ListGroup.Item>Creating passwords that consist only of letters or only of numbers</ListGroup.Item>
                <ListGroup.Item>Focusing only on complexity (special characters, numbers) and ignoring the importance of password length</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="importance" title="Importance">
          <Card>
            <Card.Body>
              <h3>Importance of Password Security</h3>
              <Row>
                <Col md={6}>
                  <h5>Protects Personal Information</h5>
                  <p>If a password is compromised, attackers can gain access to sensitive personal information, leading to identity theft, financial loss, or privacy violations.</p>
                </Col>
                <Col md={6}>
                  <h5>Prevents Identity Theft</h5>
                  <p>If someone gains control of these accounts, they can impersonate you, damaging your reputation or causing harm to your personal and professional relationships.</p>
                </Col>
                <Col md={6}>
                  <h5>Protecting Professional Information</h5>
                  <p>A compromised password can lead to the theft of confidential business information, trade secrets, or intellectual property, causing significant harm to a company’s operations and reputation.</p>
                </Col>
                <Col md={6}>
                  <h5>Mitigating Cybersecurity Threats</h5>
                  <p>Strong, unique passwords reduce the likelihood of these attacks succeeding, helping to protect your digital life from a wide range of online threats.</p>
                </Col>
                <Col md={6}>
                  <h5>Preventing Data Breaches</h5>
                  <p>Data breaches can expose millions of users' information, leading to widespread harm and significant costs for organizations to recover from the breach.</p>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <h5>Secures Financial Assets</h5>
                  <p>Weak or compromised passwords can allow attackers to drain bank accounts, make unauthorized purchases, or steal financial information.</p>
                </Col>
                <Col md={6}>
                  <h5>Maintains Privacy</h5>
                  <p>A breach can expose personal conversations, sensitive documents, and confidential data, leading to embarrassment, blackmail, or reputational damage.</p>
                </Col>
                <Col md={6}>
                  <h5>Preventing Unauthorized Access</h5>
                  <p>Unauthorized access can result in the installation of malware, data breaches, and loss of control over personal or professional systems.</p>
                </Col>
                <Col md={6}>
                  <h5>Compliance with Legal and Regulatory Standards</h5>
                  <p>Failing to maintain password security can lead to legal consequences, fines, and damage to an organization's credibility.</p>
                </Col>
                <Col md={6}>
                  <h5>Supporting Two-Factor Authentication (2FA)</h5>
                  <p>Even if your password is compromised, 2FA can prevent unauthorized access, but the effectiveness depends on having a strong, secure password.</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default PasswordGuide;