// netlify/functions/subscribe.js
// Place this file at: netlify/functions/subscribe.js in your project root
// API key lives in Netlify dashboard → Site configuration → Environment variables
// Key name: BREVO_API_KEY

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { email: rawEmail } = JSON.parse(event.body);
  const email = rawEmail?.trim();

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Email is required" }),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid email" }),
    };
  }

  const API_KEY = process.env.BREVO_API_KEY;

  try {
    // Step 1: Check if contact exists in list #4 specifically
    const checkResponse = await fetch(
      `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "api-key": API_KEY,
        },
      },
    );

    if (checkResponse.status === 200) {
      const contactData = await checkResponse.json();

      // Check if list #4 is in their list IDs
      if (contactData.listIds && contactData.listIds.includes(4)) {
        return {
          statusCode: 200,
          body: JSON.stringify({ status: "already_subscribed" }),
        };
      }
    }

    // Step 2: Not in list #4, go ahead and add them
    const addResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [4],
        updateEnabled: true,
      }),
    });

    if (addResponse.status === 201 || addResponse.status === 204) {
      return {
        statusCode: 200,
        body: JSON.stringify({ status: "subscribed" }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ status: "error" }),
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "error", detail: err.message }),
    };
  }
};
