/* ==========================================================================
   Om Sai Trade Concern - Chatbot
   ========================================================================== */

// Company Knowledge Base
const companyInfo = {
    name: "Om Sai Trade Concern",
    certification: "ISO 9001:2000 certified",
    description: "Leading supplier of electrical, electronic, and telecom equipment",
    
    // Contact Information
    contact: {
        headOffice: {
            address: "S.N.P.-7, Narayansthan, Main Road, Siddarthanagar, Bhairahawa, Nepal",
            phone: "+977-71-587633",
            mobile: "+977-9857051000",
            fax: "+977-71-587427",
            email: "info@omsai-trade.com"
        },
        kathmanduOffice: {
            address: "Tri-Netra Tole, Milan Chowk-44600 Kathmandu, Nepal",
            email: "omsai.trade@gmail.com"
        }
    },
    
    // Products
    products: [
        "Telecommunication Equipment (cables, DWC pipes, PVC pipes, SIM cards, OTA systems)",
        "Transmission Equipment (SDH Radio, PDH Radio)",
        "Telecom Testing Equipment",
        "Electrical Equipment",
        "Security Products"
    ],
    
    // Services
    services: [
        "International trading of electrical products",
        "Telecom equipment supply",
        "Transmission equipment solutions",
        "Government tender participation",
        "Quality product sourcing"
    ]
};

// Chatbot responses database
const responses = {
    greetings: [
        "Hello! Welcome to Om Sai Trade Concern. How can I help you today?",
        "Hi there! I'm here to assist you with any questions about our products and services.",
        "Namaste! How may I assist you today?"
    ],
    
    about: `Om Sai Trade Concern is a leading ${companyInfo.certification} company specializing in the international trading of electrical, electronic, security, and telecom products. We are a trusted partner for government organizations and private enterprises.`,
    
    products: `We offer a wide range of products including:\n\n• Telecommunication Equipment (cables, cable accessories, DWC pipes, PVC pipes, SIM cards, OTA systems)\n• Transmission Equipment (SDH Radio, PDH Radio)\n• Telecom Testing Equipment\n• Electrical Equipment\n• Security Products\n\nWould you like more details about any specific product category?`,
    
    services: `Our services include:\n\n• International trading of electrical products\n• Telecom equipment supply\n• Transmission equipment solutions\n• Government tender participation\n• Quality product sourcing\n\nVisit our Services page for more information!`,
    
    contact: `You can reach us at:\n\n📍 Head Office:\n${companyInfo.contact.headOffice.address}\n📞 Phone: ${companyInfo.contact.headOffice.phone}\n📱 Mobile: ${companyInfo.contact.headOffice.mobile}\n📧 Email: ${companyInfo.contact.headOffice.email}\n\n📍 Kathmandu Office:\n${companyInfo.contact.kathmanduOffice.address}\n📧 Email: ${companyInfo.contact.kathmanduOffice.email}`,
    
    certification: `Om Sai Trade Concern is ${companyInfo.certification}. This certification demonstrates our commitment to maintaining the highest quality standards in all our products and services.`,
    
    location: `We have two offices in Nepal:\n\n1. Head Office: ${companyInfo.contact.headOffice.address}\n2. Kathmandu Office: ${companyInfo.contact.kathmanduOffice.address}`,
    
    enquiry: "You can submit an enquiry through our Enquiry page or contact us directly at info@omsai-trade.com. We typically respond within 24-48 hours.",
    
    hours: "Our business hours are Sunday to Friday, 9:00 AM to 6:00 PM (Nepal Time). We are closed on Saturdays and public holidays.",
    
    telecom: "We specialize in telecommunication equipment including:\n\n• Access parts (cables, cable accessories)\n• DWC pipes, PVC pipes, PLSJP pipes\n• SIM cards and OTA systems\n• RF planning tools and components\n\nFor specific requirements, please contact us or submit an enquiry.",
    
    transmission: "Our transmission equipment includes:\n\n• SDH Radio equipment\n• PDH Radio equipment\n• Microwave transmission solutions\n\nWe supply to major telecom operators and government organizations.",
    
    electrical: "We provide electrical equipment including:\n\n• Power distribution equipment\n• Electrical components\n• Industrial electrical solutions\n\nContact us for specific requirements and bulk orders.",
    
    default: "I'm not sure I understand your question. Here are some topics I can help you with:\n\n• Products and Services\n• Contact Information\n• Company Information\n• Enquiry Process\n\nYou can also visit our Contact Us page or submit an enquiry for specific questions."
};

// Keywords for matching
const keywords = {
    greetings: ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good afternoon', 'good evening', 'greetings'],
    about: ['about', 'company', 'who are you', 'tell me about', 'information', 'what is omsai', 'om sai'],
    products: ['product', 'products', 'what do you sell', 'items', 'catalog', 'catalogue', 'buy'],
    services: ['service', 'services', 'what do you do', 'offer', 'provide'],
    contact: ['contact', 'phone', 'email', 'call', 'reach', 'number', 'mail'],
    certification: ['certificate', 'certification', 'iso', 'quality', 'certified'],
    location: ['location', 'address', 'where', 'office', 'find you', 'visit'],
    enquiry: ['enquiry', 'inquiry', 'quote', 'quotation', 'order', 'purchase', 'requirement'],
    hours: ['hours', 'timing', 'open', 'when', 'schedule', 'working hours', 'business hours'],
    telecom: ['telecom', 'telecommunication', 'cable', 'sim', 'ota', 'pipes', 'dwc'],
    transmission: ['transmission', 'sdh', 'pdh', 'radio', 'microwave'],
    electrical: ['electrical', 'electric', 'power', 'electronics'],
    thanks: ['thank', 'thanks', 'thank you', 'appreciate', 'helpful']
};

// Find the best matching response
function findResponse(message) {
    const lowerMessage = message.toLowerCase().trim();
    
    // Check for thank you
    if (keywords.thanks.some(word => lowerMessage.includes(word))) {
        return "You're welcome! Is there anything else I can help you with?";
    }
    
    // Check for greetings
    if (keywords.greetings.some(word => lowerMessage.includes(word))) {
        return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
    }
    
    // Check for specific topics
    if (keywords.telecom.some(word => lowerMessage.includes(word))) {
        return responses.telecom;
    }
    
    if (keywords.transmission.some(word => lowerMessage.includes(word))) {
        return responses.transmission;
    }
    
    if (keywords.electrical.some(word => lowerMessage.includes(word))) {
        return responses.electrical;
    }
    
    if (keywords.products.some(word => lowerMessage.includes(word))) {
        return responses.products;
    }
    
    if (keywords.services.some(word => lowerMessage.includes(word))) {
        return responses.services;
    }
    
    if (keywords.contact.some(word => lowerMessage.includes(word))) {
        return responses.contact;
    }
    
    if (keywords.certification.some(word => lowerMessage.includes(word))) {
        return responses.certification;
    }
    
    if (keywords.location.some(word => lowerMessage.includes(word))) {
        return responses.location;
    }
    
    if (keywords.enquiry.some(word => lowerMessage.includes(word))) {
        return responses.enquiry;
    }
    
    if (keywords.hours.some(word => lowerMessage.includes(word))) {
        return responses.hours;
    }
    
    if (keywords.about.some(word => lowerMessage.includes(word))) {
        return responses.about;
    }
    
    // Default response
    return responses.default;
}

// Chatbot Class
class Chatbot {
    constructor() {
        this.isOpen = false;
        this.init();
    }
    
    init() {
        this.createChatbotHTML();
        this.attachEventListeners();
    }
    
    createChatbotHTML() {
        // Create chatbot container
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container">
                <!-- Chat Toggle Button -->
                <button id="chatbot-toggle" class="chatbot-toggle" aria-label="Open chat">
                    <span class="chatbot-toggle-icon">💬</span>
                    <span class="chatbot-toggle-close">✕</span>
                </button>
                
                <!-- Attractive Label -->
                <div class="chatbot-label">👋 Need Help? Chat with us!</div>
                
                <!-- Chat Window -->
                <div id="chatbot-window" class="chatbot-window">
                    <!-- Chat Header -->
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <div class="chatbot-avatar">🤖</div>
                            <div class="chatbot-header-text">
                                <h4>Om Sai Assistant</h4>
                                <span class="chatbot-status">Online</span>
                            </div>
                        </div>
                        <button id="chatbot-close" class="chatbot-close" aria-label="Close chat">✕</button>
                    </div>
                    
                    <!-- Chat Messages -->
                    <div id="chatbot-messages" class="chatbot-messages">
                        <div class="chat-message bot-message">
                            <div class="message-avatar">🤖</div>
                            <div class="message-content">
                                <p>Hello! Welcome to Om Sai Trade Concern. How can I help you today?</p>
                                <div class="quick-replies">
                                    <button class="quick-reply" data-message="Tell me about your products">Products</button>
                                    <button class="quick-reply" data-message="What services do you offer?">Services</button>
                                    <button class="quick-reply" data-message="How can I contact you?">Contact</button>
                                    <button class="quick-reply" data-message="Tell me about your company">About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Chat Input -->
                    <div class="chatbot-input-container">
                        <input type="text" id="chatbot-input" class="chatbot-input" placeholder="Type your message..." autocomplete="off">
                        <button id="chatbot-send" class="chatbot-send" aria-label="Send message">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Append to body
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }
    
    attachEventListeners() {
        // Toggle button
        const toggleBtn = document.getElementById('chatbot-toggle');
        const closeBtn = document.getElementById('chatbot-close');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        const container = document.getElementById('chatbot-container');
        
        // Toggle chat window
        toggleBtn.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.closeChat());
        
        // Send message
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // Quick replies
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-reply')) {
                const message = e.target.getAttribute('data-message');
                this.handleQuickReply(message);
            }
        });
    }
    
    toggleChat() {
        const container = document.getElementById('chatbot-container');
        this.isOpen = !this.isOpen;
        container.classList.toggle('open', this.isOpen);
        
        if (this.isOpen) {
            document.getElementById('chatbot-input').focus();
        }
    }
    
    closeChat() {
        const container = document.getElementById('chatbot-container');
        this.isOpen = false;
        container.classList.remove('open');
    }
    
    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (message === '') return;
        
        // Add user message
        this.addMessage(message, 'user');
        input.value = '';
        
        // Show typing indicator
        this.showTyping();
        
        // Get bot response after a short delay
        setTimeout(() => {
            this.hideTyping();
            const response = findResponse(message);
            this.addMessage(response, 'bot');
        }, 800 + Math.random() * 500);
    }
    
    handleQuickReply(message) {
        // Add user message
        this.addMessage(message, 'user');
        
        // Show typing indicator
        this.showTyping();
        
        // Get bot response
        setTimeout(() => {
            this.hideTyping();
            const response = findResponse(message);
            this.addMessage(response, 'bot');
        }, 600);
    }
    
    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        
        // Format the text (convert \n to <br>)
        const formattedText = text.replace(/\n/g, '<br>');
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    <p>${formattedText}</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${formattedText}</p>
                </div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    showTyping() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    hideTyping() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});
