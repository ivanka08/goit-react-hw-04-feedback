
import { useState } from "react";

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Sections/Section";
import Notification from "./Notification/Notification";

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (evt) => {
    // console.log(evt.target);
    const { name } = evt.target;
    setFeedbacks(prevState => {
      const value = prevState[name];

      return {...prevState, [name]: value + 1}
    });
  };

  const { good, neutral, bad } = feedbacks;
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  return <div>
    <Section title="Please leave feedback">
      <FeedbackOptions 
        options={Object.keys(feedbacks)}
        onLeaveFeedback={onLeaveFeedback}
      />
    </Section>
    <Section title="Statistics">
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        /> ) : (
          <Notification message="There is no feedback"/>
        )}
    </Section>
  </div>
}


export default App;