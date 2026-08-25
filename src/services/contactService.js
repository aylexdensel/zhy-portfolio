// Web3Forms Access Key connected to estradaailexdenzel@gmail.com
const WEB3FORMS_ACCESS_KEY = '0741ca91-6b2b-4b26-a30a-153dae6e6470';

export async function sendContactForm(formData) {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        subject: formData.subject || `New Portfolio Message from ${formData.name}`,
        message: formData.message,
        from_name: 'ZHY Portfolio Contact Form'
      })
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        message: 'Message delivered directly to your Gmail inbox!'
      };
    } else {
      throw new Error(data.message || 'Failed to deliver message.');
    }
  } catch (error) {
    console.error('Contact Service Error:', error);
    return {
      success: false,
      error: error.message || 'Failed to send message. Please try emailing directly.'
    };
  }
}