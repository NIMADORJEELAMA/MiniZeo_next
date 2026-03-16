import React from "react";

const Internship = () => {
  const forms = [
    {
      title: "Frontend Internship",
      link: "https://forms.gle/wAKLnLNt7s9XbTPg6",
      description: "Build beautiful user interfaces with modern frameworks",
    },
    {
      title: "Backend Internship",
      link: "https://forms.gle/fswz7KE2EX5UB5vx9",
      description: "Develop robust server systems and APIs",
    },
    {
      title: "SDE Internship",
      link: "https://forms.gle/6dv4KsiJgrSmCWWV9",
      description: "Full-stack development opportunities",
    },
    {
      title: "UI/UX Internship",
      link: "https://forms.gle/SaCamCAEGNgdRLfz6",
      description: "Design exceptional user experiences",
    },
  ];

  const openForm = (url) => {
    window.open(url, "_blank");
  };

  return (
    // <div style={styles.container}>
    <div style={styles.content}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Internship Opportunities</h1>
        <p style={styles.subText}>
          Join our team and accelerate your career in technology
        </p>
      </div>

      <div style={styles.cardContainer}>
        {forms.map((form, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{form.title}</h3>
              <p style={styles.cardDescription}>{form.description}</p>

              <button
                style={styles.button}
                onClick={() => openForm(form.link)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#000000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                Apply Now
                <span style={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

const styles = {
  container: {
    // minHeight: "100vh",
    padding: "80px 20px",
    background: "#000000",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  content: {
    // maxWidth: "1200px",
    // margin: "0 auto",
  },
  header: {
    marginTop: "24px",
    marginBottom: "64px",
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "12px",
    letterSpacing: "-0.03em",
  },
  subText: {
    fontSize: "18px",
    color: "#888888",
    fontWeight: "400",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
  },
  cardContent: {
    padding: "32px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "12px",
    letterSpacing: "-0.02em",
  },
  cardDescription: {
    fontSize: "15px",
    color: "#888888",
    marginBottom: "28px",
    lineHeight: "1.6",
  },
  button: {
    padding: "12px 24px",
    fontSize: "15px",
    fontWeight: "500",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    cursor: "pointer",
    color: "#ffffff",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  arrow: {
    fontSize: "18px",
    transition: "transform 0.3s ease",
  },
};

export default Internship;
