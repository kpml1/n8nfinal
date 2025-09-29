import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

const init = () => {
  createChat({
    webhookUrl: 'http://localhost:5678/webhook/f8ab043b-b6b7-4989-8977-bb232b9c320e/chat',
    webhookConfig: {
      method: 'POST',
      headers: {}
    },
    target: '#n8n-chat',
    mode: 'window',
    chatInputKey: 'chatInput',
    chatSessionKey: 'sessionId',
    loadPreviousSession: true,
    metadata: {},
    showWelcomeScreen: false,
    defaultLanguage: 'en',
    initialMessages: [
      'Hello I am a real person agent from Monopoly'
    ],
    i18n: {
      en: {
        title: 'Monopoly',
        subtitle: '',
        footer: '',
        getStarted: 'New Conversation',
        inputPlaceholder: 'Type your question..',
      },
    },
    enableStreaming: false,
  });
};

init();
































// import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

// const init = () => {
	
//   createChat({
// 	webhookUrl: 'http://localhost:5678/webhook/f8ab043b-b6b7-4989-8977-bb232b9c320e/chat',
// 	webhookConfig: {
// 		method: 'POST',
// 		headers: {}
// 	},
// 	target: '#n8n-chat',
// 	mode: 'window',
// 	chatInputKey: 'chatInput',
// 	chatSessionKey: 'sessionId',
// 	loadPreviousSession: true,
// 	metadata: {},
// 	showWelcomeScreen: false,
// 	defaultLanguage: 'en',
// 	initialMessages: [
// 		'Hello i am real person agent from Monopoly',
// 		// 'My name is Nathan. How can I assist you today?'
// 	],
// 	i18n: {
// 		en: {
// 			title: 'Monopoly',
// 			subtitle: "",
// 			footer: '',
// 			getStarted: 'New Conversation',
// 			inputPlaceholder: 'Type your question..',
// 		},
// 	},
// 	enableStreaming: false,
// });
//   // createChat({
// 	// 	webhookUrl: 'http://localhost:5678/webhook/219b084b-399e-422e-ae82-c19ab4182748/chat'
// 	// });
// }



// init();