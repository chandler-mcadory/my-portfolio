import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
    const [typedText, setTypedText] = useState('');
    const introText = 'Greetings, adventurer!';

    useEffect(() => {
        let charIndex = 0;
        let timeout;
        const typeWriter = () => {
            if (charIndex < introText.length - 1) {
                setTypedText((prevText) => prevText + (introText[charIndex] ?? ''));
                charIndex++;
                timeout = setTimeout(typeWriter, 75);
            } else {
                setTypedText(introText);
                // Reveal other content when the animation stops
                document.querySelectorAll(`.${styles.leftSection}, .${styles.rightSection}`).forEach((elem) => {
                    elem.style.opacity = '1';
                    elem.style.transform = 'translateY(0)';
                });
                document.querySelector(`.${styles.finalParagraph}`).style.opacity = '1';
                document.querySelector(`.${styles.finalParagraph}`).style.transform = 'translateY(0)';
            }
        };

        typeWriter();
        // Cleanup function to prevent multiple instances
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <div className={`${styles.card} ${styles.introCard}`}>
                        <h2>
                            <span className={styles.typewriterText}>{typedText}</span>
                        </h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="auto" md={6}>
                    <div className={`${styles.card} ${styles.leftSection}`}>
                        <p>
                            My name is Chandler McAdory, and though I may not be a legendary hero
                            wielding a magical sword, I have embarked on an epic quest in the
                            realm of coding. I recently graduated from Coding Dojo, where I honed
                            my skills in web development, learning to master arcane spells like
                            C#, MVC, MERN Stack, Entity Framework, JavaScript, HTML, CSS, and
                            ASP.NET Core.
                        </p>
                        <p>
                            With a background in blue-collar labor and four years of experience
                            managing fellow warriors, I bring a unique perspective to the table,
                            combining grit, determination, and an uncanny ability to communicate
                            with machines in their cryptic languages.
                        </p>
                    </div>
                </Col>
                <Col xs="auto" md={6}>
                    <div className={`${styles.card} ${styles.rightSection}`}>
                        <p>
                            As a modern-day digital wizard, I enjoy conjuring up solutions to
                            complex challenges and creating magical experiences on the web. When
                            I'm not busy crafting digital enchantments, you'll find me
                            weightlifting, participating in recreational sports, gaming, watching
                            movies, or delving deep into the world of Dungeons and Dragons.
                        </p>
                        <p>
                            If you're looking for a developer with a passion for crafting
                            spellbinding code and a sense of humor forged in the fires of Mount
                            Doom, your quest ends here. Let's join forces and embark on a
                            legendary project together!
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <div className={`${styles.card} ${styles.finalParagraph}`}>
                        <p>
                            Feel free to explore my projects, send a raven, or check out my on the navbar. 
                            Together, we'll conquer the digital dungeons!
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;