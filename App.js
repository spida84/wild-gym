import React from "react";

const sampleWorkout = {
  name: "Strength Training Week 1",
  days: [
    {
      day: "Monday - Push Day",
      exercises: [
        {
          name: "Bench Press",
          sets: 4,
          reps: "8-10",
          link: "https://www.youtube.com/watch?v=gRVjAtPip0Y",
        },
        {
          name: "Overhead Press",
          sets: 3,
          reps: "8-10",
          link: "https://www.youtube.com/watch?v=2yjwXTZQDDI",
        },
        {
          name: "Triceps Pushdown",
          sets: 3,
          reps: "12-15",
          link: "https://www.youtube.com/watch?v=2-LAMcpzODU",
        },
      ],
    },
    {
      day: "Wednesday - Pull Day",
      exercises: [
        {
          name: "Deadlift",
          sets: 4,
          reps: "5-8",
          link: "https://www.youtube.com/watch?v=op9kVnSso6Q",
        },
        {
          name: "Barbell Row",
          sets: 3,
          reps: "8-10",
          link: "https://www.youtube.com/watch?v=vT2GjY_Umpw",
        },
        {
          name: "Bicep Curl",
          sets: 3,
          reps: "12-15",
          link: "https://www.youtube.com/watch?v=in7PaeYlhrM",
        },
      ],
    },
    {
      day: "Friday - Leg Day",
      exercises: [
        {
          name: "Squat",
          sets: 4,
          reps: "8-10",
          link: "https://www.youtube.com/watch?v=ultWZbUMPL8",
        },
        {
          name: "Lunges",
          sets: 3,
          reps: "10 each leg",
          link: "https://www.youtube.com/watch?v=QOVaHwm-Q6U",
        },
        {
          name: "Leg Curl",
          sets: 3,
          reps: "12-15",
          link: "https://www.youtube.com/watch?v=Job30gMyY3E",
        },
      ],
    },
  ],
};

export default function App() {
  const user = "Practice Client";

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Welcome, {user}</h1>
      <h2>{sampleWorkout.name}</h2>
      {sampleWorkout.days.map((day, i) => (
        <div key={i} style={{ marginBottom: 20, border: "1px solid #ccc", padding: 15, borderRadius: 8 }}>
          <h3>{day.day}</h3>
          <ul>
            {day.exercises.map((ex, j) => (
              <li key={j} style={{ marginBottom: 10 }}>
                <strong>{ex.name}</strong> - {ex.sets} sets x {ex.reps} reps -{" "}
                <a href={ex.link} target="_blank" rel="noopener noreferrer">
                  Watch Video
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}