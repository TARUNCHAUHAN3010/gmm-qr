/**
 * Girdhar Morari, Mathura - Standalone Google Review Assistant Script
 * Complete 100 Unique Review Suggestions (50 English, 50 Hindi)
 * Pure vanilla JavaScript with zero backend required.
 */

const CONFIG = {
  businessName: 'Girdhar Morari, Mathura',
  businessNameHi: 'गिरधर मुरारी, मथुरा',
  websiteUrl: 'https://girdharmorarimathura.com',
  reviewUrl: 'https://g.page/r/CfcwIoRWwFg7EBM/review',
};

// 100 Unique Review Suggestions (50 English, 50 Hindi)
const SUGGESTIONS = [
  // 1-50 English
  { id: 1, cat: 'overall', lang: 'en', tone: 'positive', text: 'My overall experience with Girdhar Morari in Mathura was very positive. If you are looking for a reliable guest house near Dwarika dheesh, this is a wonderful stay. We visited for [mention purpose or darshan] and found [describe what pleased you most]. Highly recommended!' },
  { id: 2, cat: 'overall', lang: 'en', tone: 'neutral', text: 'Visited Girdhar Morari recently for [mention product or service]. The experience was generally fair and met basic expectations regarding [mention aspect]. [Add any specific observation].' },
  { id: 3, cat: 'overall', lang: 'en', tone: 'positive', text: 'A pleasant encounter at Girdhar Morari, Mathura. The handling of [mention specific order or inquiry] was done in a timely manner. I particularly appreciated [highlight specific detail].' },
  { id: 4, cat: 'overall', lang: 'en', tone: 'constructive', text: 'Had an average overall experience during my recent visit to Girdhar Morari. While [mention positive aspect] was good, [mention what could be better] could be managed more smoothly.' },
  { id: 5, cat: 'overall', lang: 'en', tone: 'positive', text: 'Had an authentic and welcoming experience at Girdhar Morari in Mathura. The team assisted me with [mention service or item], and the entire process was [describe your feeling].' },
  { id: 6, cat: 'staff', lang: 'en', tone: 'positive', text: 'The staff at Girdhar Morari was courteous and attentive during my visit. Special thanks to [mention staff name or department if known] who helped me choose [mention product/service].' },
  { id: 7, cat: 'staff', lang: 'en', tone: 'neutral', text: 'Interacted with the staff regarding [inquiry or purchase]. They answered standard questions satisfactorily, though during peak rush [mention if guidance was hurried or fine].' },
  { id: 8, cat: 'staff', lang: 'en', tone: 'positive', text: 'Appreciated the respectful and polite demeanor of the team at Girdhar Morari in Mathura. They took time to explain [mention details about product or billing] without rushing.' },
  { id: 9, cat: 'staff', lang: 'en', tone: 'constructive', text: 'The staff was generally cooperative, but there seemed to be some confusion regarding [mention product details or counter queue]. A bit more coordinated teamwork would be helpful.' },
  { id: 10, cat: 'staff', lang: 'en', tone: 'positive', text: 'Found the team at Girdhar Morari to be patient and well-mannered. They addressed my queries regarding [mention specific item] with genuine hospitality.' },
  { id: 11, cat: 'service', lang: 'en', tone: 'positive', text: 'Customer service was responsive and helpful. When I asked about [specific request or product availability], the team handled it promptly and professionally.' },
  { id: 12, cat: 'service', lang: 'en', tone: 'neutral', text: 'The customer service at Girdhar Morari was adequate. My request for [describe request] was processed within [mention wait time], which was acceptable.' },
  { id: 13, cat: 'service', lang: 'en', tone: 'positive', text: 'Really good customer support during my visit. They made sure my requirements for [mention order or inquiry] were clarified before proceeding.' },
  { id: 14, cat: 'service', lang: 'en', tone: 'constructive', text: 'Customer assistance was decent overall, though it took longer than expected to attend to [mention specific query or counter]. Response time could be slightly improved.' },
  { id: 15, cat: 'service', lang: 'en', tone: 'positive', text: 'Felt well looked after as a customer. The team at Girdhar Morari showed dedication in helping me finalize [mention product or service choice].' },
  { id: 16, cat: 'communication', lang: 'en', tone: 'positive', text: 'Communication was transparent and straightforward. The details provided regarding [pricing, availability, or process] were clear and matched my final experience.' },
  { id: 17, cat: 'communication', lang: 'en', tone: 'neutral', text: 'Received standard information regarding [mention product or order]. Most details were clear, though I had to follow up once regarding [mention aspect].' },
  { id: 18, cat: 'communication', lang: 'en', tone: 'positive', text: 'I appreciated the honest and direct communication from the team. They gave accurate guidance on [mention timeline, choices, or rates] without ambiguous promises.' },
  { id: 19, cat: 'communication', lang: 'en', tone: 'constructive', text: 'Information on [mention item or policy] could be communicated more proactively. It would help if customers were briefed earlier on [mention specific detail].' },
  { id: 20, cat: 'communication', lang: 'en', tone: 'positive', text: 'Easy to communicate with and very accessible. They patiently answered all my questions regarding [mention order or inquiry] in Mathura.' },
  { id: 21, cat: 'quality', lang: 'en', tone: 'positive', text: 'The quality of [mention specific product or service] from Girdhar Morari exceeded my expectations. The finish and attention to detail were evident.' },
  { id: 22, cat: 'quality', lang: 'en', tone: 'neutral', text: 'Purchased/used [mention product or service]. The quality was standard and reasonably aligned with what was described. It serves the intended purpose well.' },
  { id: 23, cat: 'quality', lang: 'en', tone: 'positive', text: 'Very satisfied with the craftsmanship and reliability of [mention product or service]. You can tell they take pride in what they offer in Mathura.' },
  { id: 24, cat: 'quality', lang: 'en', tone: 'constructive', text: 'The quality of [mention item] was decent, though [mention specific element or packaging] could be refined for a better overall impression.' },
  { id: 25, cat: 'quality', lang: 'en', tone: 'positive', text: 'Consistently good standard for [mention product/service]. Everything arrived/was provided in good order, matching the specifications we discussed.' },
  { id: 26, cat: 'value', lang: 'en', tone: 'positive', text: 'Found the pricing for [mention product or service] to be fair and justified given the standard offered. Felt like a good value purchase.' },
  { id: 27, cat: 'value', lang: 'en', tone: 'neutral', text: 'Prices at Girdhar Morari seem comparable to the prevailing market rates in Mathura for [mention item]. Neither overly expensive nor a bargain.' },
  { id: 28, cat: 'value', lang: 'en', tone: 'positive', text: 'Felt that I received genuine worth for the amount paid for [mention product/service]. Reasonable rates paired with dependable quality.' },
  { id: 29, cat: 'value', lang: 'en', tone: 'constructive', text: 'The overall offering was acceptable, but [mention specific item or charge] felt slightly steep compared to alternatives. Clearer price breakdowns would help.' },
  { id: 30, cat: 'value', lang: 'en', tone: 'positive', text: 'Honest pricing with no hidden surprises. Appreciated the transparent estimate given upfront for [mention product or service].' },
  { id: 31, cat: 'convenience', lang: 'en', tone: 'positive', text: 'As a convenient guest house near Dwarika dheesh temple, Girdhar Morari made our Mathura visit very comfortable. The walking distance to the temple and [mention room or service aspect] saved us plenty of time.' },
  { id: 32, cat: 'convenience', lang: 'en', tone: 'neutral', text: 'If you are searching for a dependable hotel near vishram ghar in Mathura, Girdhar Morari is located conveniently close to the ghats. [Mention parking, morning yamuna ji aarti, or transit note].' },
  { id: 33, cat: 'convenience', lang: 'en', tone: 'positive', text: 'Convenient location near gujrat samaj guest house in Mathura. The check-in was smooth, and finding [mention room, specific facility, or help desk] was quick and easy.' },
  { id: 34, cat: 'convenience', lang: 'en', tone: 'constructive', text: 'The experience was good, but the queue or wait time around [mention peak time or counter] could be organized more efficiently for customer convenience.' },
  { id: 35, cat: 'convenience', lang: 'en', tone: 'positive', text: 'Smooth experience overall. They accommodated my schedule when I needed [mention urgent delivery, pickup, or consultation].' },
  { id: 36, cat: 'cleanliness', lang: 'en', tone: 'positive', text: 'The premises were neat, well-maintained, and orderly during my visit. It created a comfortable atmosphere for browsing [mention items].' },
  { id: 37, cat: 'cleanliness', lang: 'en', tone: 'neutral', text: 'The store/facility environment was reasonably tidy and presentable given the foot traffic on [mention day or time].' },
  { id: 38, cat: 'cleanliness', lang: 'en', tone: 'positive', text: 'Appreciated the cleanliness and hygienic presentation of the space and items displayed. It reflects good management standards.' },
  { id: 39, cat: 'cleanliness', lang: 'en', tone: 'constructive', text: 'The space was generally okay, though during busy hours the [mention seating, display area, or counter] could be kept a bit tidier.' },
  { id: 40, cat: 'cleanliness', lang: 'en', tone: 'positive', text: 'Well-kept surroundings and organized displays made it easy to review [mention products or options] comfortably.' },
  { id: 41, cat: 'repeat', lang: 'en', tone: 'positive', text: 'This was my second visit to Girdhar Morari in Mathura, and the consistency in [mention product/service] has been reassuring. Will continue to visit.' },
  { id: 42, cat: 'repeat', lang: 'en', tone: 'neutral', text: 'Have visited Girdhar Morari previously. While my earlier experience was [mention], this recent visit was [describe if similar or different].' },
  { id: 43, cat: 'repeat', lang: 'en', tone: 'positive', text: 'A dependable stop in Mathura whenever I need [mention product/service category]. They have maintained reliable standards over time.' },
  { id: 44, cat: 'repeat', lang: 'en', tone: 'constructive', text: 'Have been a returning visitor, but felt this recent visit was slightly rushed compared to previous times. Hope they retain the earlier personal touch.' },
  { id: 45, cat: 'repeat', lang: 'en', tone: 'positive', text: 'Reliable long-term association with Girdhar Morari. Whenever our family needs [mention requirement], they deliver as promised.' },
  { id: 46, cat: 'improvement', lang: 'en', tone: 'constructive', text: 'Overall a decent experience with [mention product/service]. As a suggestion, adding [online catalog, faster billing, or more display variety] would make it even better.' },
  { id: 47, cat: 'improvement', lang: 'en', tone: 'constructive', text: 'Appreciate the service at Girdhar Morari. One constructive suggestion would be to provide [mention clearer signage, digital receipts, or appointment slots].' },
  { id: 48, cat: 'improvement', lang: 'en', tone: 'constructive', text: 'Good encounter overall. Would suggest improving [mention waiting area, stock updates, or telephone response time] during peak weekend rush.' },
  { id: 49, cat: 'improvement', lang: 'en', tone: 'constructive', text: 'The team does good work on [mention aspect]. To improve further, they might consider [mention specific customer recommendation].' },
  { id: 50, cat: 'improvement', lang: 'en', tone: 'constructive', text: 'Satisfied with [mention product/service], but hope management looks into [mention specific feedback] for a more seamless customer journey.' },

  // 51-100 Hindi
  { id: 51, cat: 'overall', lang: 'hi', tone: 'positive', text: 'मथुरा में द्वारिकाधीश जी के मंदिर के पास गेस्ट हाउस (Guest House near Dwarika dheesh) के रूप में गिरधर मुरारी में हमारा प्रवास बहुत सुखद रहा। हम [दर्शन या पारिवारिक यात्रा] के लिए आए थे और [जो बात सबसे अच्छी लगी] विशेष रूप से पसंद आई। सभी श्रद्धालुओं को यहाँ ठहरने की सलाह दूंगा।' },
  { id: 52, cat: 'overall', lang: 'hi', tone: 'neutral', text: 'हाल ही में गिरधर मुरारी में [काम या उत्पाद] के लिए जाना हुआ। अनुभव सामान्य और संतोषजनक रहा। [अपनी कोई विशेष बात जोड़ें]।' },
  { id: 53, cat: 'overall', lang: 'hi', tone: 'positive', text: 'मथुरा स्थित गिरधर मुरारी में सेवा और व्यवस्था सराहनीय रही। [विशिष्ट कार्य या ऑर्डर] का काम समय पर पूरा हुआ। [विशेष अनुभव लिखें]। धन्यवाद!' },
  { id: 54, cat: 'overall', lang: 'hi', tone: 'constructive', text: 'गिरधर मुरारी में मेरा समग्र अनुभव औसत रहा। [जो बात ठीक थी] अच्छी थी, लेकिन [जिसमें सुधार की आवश्यकता है] पर थोड़ा और ध्यान दिया जा सकता है।' },
  { id: 55, cat: 'overall', lang: 'hi', tone: 'positive', text: 'मथुरा में गिरधर मुरारी का व्यवहार और कार्यशैली बहुत विश्वसनीय लगी। [सामग्री या सेवा] को लेकर जो अपेक्षा थी, वह पूरी हुई।' },
  { id: 56, cat: 'staff', lang: 'hi', tone: 'positive', text: 'गिरधर मुरारी के कर्मचारियों का व्यवहार बहुत ही विनम्र और सहयोगी था। उन्होंने [उत्पाद या जानकारी] चुनने में धैर्यपूर्वक पूरी सहायता की।' },
  { id: 57, cat: 'staff', lang: 'hi', tone: 'neutral', text: 'स्टाफ से [पूछताछ या कार्य] के संबंध में बातचीत हुई। जानकारी ठीक से दी गई, हालांकि व्यस्त समय में [अपनी कोई टिप्पणी लिखें]।' },
  { id: 58, cat: 'staff', lang: 'hi', tone: 'positive', text: 'यहाँ के कर्मचारियों का आदरपूर्ण और शांत स्वभाव बहुत अच्छा लगा। उन्होंने [सामग्री या बिलिंग] को लेकर बिना किसी जल्दबाजी के सब समझाया।' },
  { id: 59, cat: 'staff', lang: 'hi', tone: 'constructive', text: 'कर्मचारी सहयोगी थे, परंतु [किसी विशेष काउंटर या जानकारी] को लेकर थोड़ा समन्वय कम दिखा। इसे और बेहतर बनाया जा सकता है।' },
  { id: 60, cat: 'staff', lang: 'hi', tone: 'positive', text: 'गिरधर मुरारी के सदस्यों ने पूरी आत्मीयता से स्वागत किया और [अपनी आवश्यकता] को अच्छी तरह समझकर उचित मार्गदर्शन दिया।' },
  { id: 61, cat: 'service', lang: 'hi', tone: 'positive', text: 'ग्राहक सेवा त्वरित और प्रभावी रही। जब मैंने [विशिष्ट प्रश्न या अनुरोध] किया, तो टीम ने तुरंत और जिम्मेदारी से समाधान निकाला।' },
  { id: 62, cat: 'service', lang: 'hi', tone: 'neutral', text: 'गिरधर मुरारी में कस्टमर सर्विस ठीक-ठाक रही। मेरे [काम या ऑर्डर] को पूरा होने में [समय] लगा, जो स्वीकार्य था।' },
  { id: 63, cat: 'service', lang: 'hi', tone: 'positive', text: 'ग्राहक संतुष्टि पर इनका विशेष ध्यान देखने को मिला। [ऑर्डर या पूछताछ] के दौरान हर बात को स्पष्ट किया गया।' },
  { id: 64, cat: 'service', lang: 'hi', tone: 'constructive', text: 'सेवा आमतौर पर ठीक थी, लेकिन [पूछताछ या काम] के लिए थोड़ा अधिक इंतजार करना पड़ा। प्रतिक्रिया समय में थोड़ा सुधार अपेक्षित है।' },
  { id: 65, cat: 'service', lang: 'hi', tone: 'positive', text: 'यहाँ आकर लगा कि ग्राहकों के समय और विश्वास का पूरा सम्मान किया जाता है। [उत्पाद या सेवा] के चयन में पूरी मदद मिली।' },
  { id: 66, cat: 'communication', lang: 'hi', tone: 'positive', text: 'जानकारी और बातचीत में पूरी पारदर्शिता रही। [मूल्य, उपलब्धता या प्रक्रिया] के बारे में जो बताया गया, वही सही साबित हुआ।' },
  { id: 67, cat: 'communication', lang: 'hi', tone: 'neutral', text: 'गिरधर मुरारी से [उत्पाद या सेवा] के बारे में सामान्य जानकारी मिली। बातें स्पष्ट थीं, यद्यपि [किसी पहलू] के लिए दोबारा पूछना पड़ा।' },
  { id: 68, cat: 'communication', lang: 'hi', tone: 'positive', text: 'स्पष्ट और सच्ची जानकारी देना इनकी सबसे अच्छी बात लगी। [सामग्री या समय-सीमा] के बारे में कोई भ्रामक वादा नहीं किया गया।' },
  { id: 69, cat: 'communication', lang: 'hi', tone: 'constructive', text: '[नियम या उत्पाद विवरण] के संबंध में पहले से अधिक स्पष्ट जानकारी दी जानी चाहिए, ताकि ग्राहकों को किसी तरह का संशय न रहे।' },
  { id: 70, cat: 'communication', lang: 'hi', tone: 'positive', text: 'बातचीत करना बहुत सहज और सरल रहा। हमारे हर सवाल का संतुष्टिपूर्ण उत्तर मथुरा के गिरधर मुरारी की टीम ने दिया।' },
  { id: 71, cat: 'quality', lang: 'hi', tone: 'positive', text: 'गिरधर मुरारी से प्राप्त [उत्पाद या सेवा] की गुणवत्ता बहुत उम्दा निकली। फिनिशिंग और मजबूती में कोई कमी नहीं है।' },
  { id: 72, cat: 'quality', lang: 'hi', tone: 'neutral', text: 'यहाँ से [उत्पाद या सेवा] ली थी। गुणवत्ता सामान्य और उम्मीद के अनुसार ठीक है। उपयोग में कोई बड़ी परेशानी नहीं आई।' },
  { id: 73, cat: 'quality', lang: 'hi', tone: 'positive', text: 'मथुरा में गिरधर मुरारी के कार्य और गुणवत्ता का स्तर वास्तव में विश्वसनीय है। [उत्पाद] देखकर कारीगरी और मेहनत साफ नजर आती है।' },
  { id: 74, cat: 'quality', lang: 'hi', tone: 'constructive', text: 'उत्पाद की गुणवत्ता ठीक थी, परंतु [पैकिंग या किसी विशेष पहलू] में थोड़ा और सुधार किया जा सकता है जिससे प्रभाव और बेहतर हो।' },
  { id: 75, cat: 'quality', lang: 'hi', tone: 'positive', text: 'गुणवत्ता के मामले में कोई समझौता नहीं दिखा। जैसी बात तय हुई थी, वैसा ही [उत्पाद या कार्य] तैयार मिला।' },
  { id: 76, cat: 'value', lang: 'hi', tone: 'positive', text: '[उत्पाद या सेवा] का मूल्य गुणवत्ता और सेवा के लिहाज से बिल्कुल उचित और तर्कसंगत लगा। पैसे का सही मोल मिला।' },
  { id: 77, cat: 'value', lang: 'hi', tone: 'neutral', text: 'मथुरा के स्थानीय बाजार के अनुसार गिरधर मुरारी के दाम सामान्य हैं। न बहुत महंगे हैं और न बहुत सस्ते।' },
  { id: 78, cat: 'value', lang: 'hi', tone: 'positive', text: 'उचित दर पर अच्छी गुणवत्ता मिली। [उत्पाद/सेवा] के लिए जो खर्च किया, उससे पूरी संतुष्टि मिली।' },
  { id: 79, cat: 'value', lang: 'hi', tone: 'constructive', text: 'सामग्री ठीक थी, लेकिन [किसी विशिष्ट वस्तु या सेवा] का मूल्य थोड़ा अधिक प्रतीत हुआ। दरों में थोड़ी अधिक स्पष्टता होनी चाहिए।' },
  { id: 80, cat: 'value', lang: 'hi', tone: 'positive', text: 'स्पष्ट मूल्य निर्धारण और बिना किसी छुपे हुए शुल्क के काम हुआ। अनुमानित खर्च पहले ही स्पष्ट कर दिया गया था।' },
  { id: 81, cat: 'convenience', lang: 'hi', tone: 'positive', text: 'विश्राम घाट/विश्राम घर के पास होटल (hotel near vishram ghar) की तलाश में गिरधर मुरारी सबसे सुविधाजनक रहा। यमुना जी की आरती और द्वारिकाधीश मंदिर दर्शन दोनों के लिए पैदल दूरी बहुत उत्तम है।' },
  { id: 82, cat: 'convenience', lang: 'hi', tone: 'neutral', text: 'गुजरात समाज गेस्ट हाउस (gujrat samaj guest house) व मथुरा के मुख्य तीर्थ स्थलों के निकट स्थित होने से गिरधर मुरारी तक पहुंचना बहुत आसान रहा। [कमरे व आतिथ्य] को लेकर अनुभव बहुत सहज रहा।' },
  { id: 83, cat: 'convenience', lang: 'hi', tone: 'positive', text: 'मथुरा में द्वारिकाधीश मंदिर और विश्राम घाट के समीप गेस्ट हाउस (Guest House near Dwarika dheesh) की तलाश कर रहे परिवारों के लिए गिरधर मुरारी एक शांत, सुरक्षित और सुव्यवस्थित विकल्प है।' },
  { id: 84, cat: 'convenience', lang: 'hi', tone: 'constructive', text: 'अनुभव संतोषजनक था, पर भीड़ के समय [काउंटर या कतार] को और व्यवस्थित किया जा सकता है ताकि ग्राहकों को सुविधा हो।' },
  { id: 85, cat: 'convenience', lang: 'hi', tone: 'positive', text: 'ग्राहक की सुविधा को प्राथमिकता दी गई और हमारे समय की अनुकूलता के अनुसार [काम या डिलीवरी] का प्रबंध किया गया।' },
  { id: 86, cat: 'cleanliness', lang: 'hi', tone: 'positive', text: 'परिसर बहुत साफ-सुथरा और व्यवस्थित था। स्वच्छ माहौल में [सामग्री देखना या बात करना] बहुत सुखद रहा।' },
  { id: 87, cat: 'cleanliness', lang: 'hi', tone: 'neutral', text: 'भीड़-भाड़ के बावजूद दुकान/परिसर का रख-रखाव सामान्य रूप से ठीक पाया गया।' },
  { id: 88, cat: 'cleanliness', lang: 'hi', tone: 'positive', text: 'स्वच्छता और व्यवस्था का विशेष ध्यान रखा गया है, जो एक अच्छी और प्रतिष्ठित जगह की पहचान है।' },
  { id: 89, cat: 'cleanliness', lang: 'hi', tone: 'constructive', text: 'जगह ठीक थी, लेकिन व्यस्त समय में [बैठने की जगह या काउंटर] की सफाई पर थोड़ा और नियमित ध्यान दिया जाना चाहिए।' },
  { id: 90, cat: 'cleanliness', lang: 'hi', tone: 'positive', text: 'सुव्यवस्थित डिस्प्ले और स्वच्छ वातावरण के कारण खरीदारी या बातचीत का अनुभव बहुत सहज रहा।' },
  { id: 91, cat: 'repeat', lang: 'hi', tone: 'positive', text: 'गिरधर मुरारी, मथुरा में यह मेरा दूसरा/तीसरा अनुभव था और हमेशा की तरह इस बार भी विश्वसनीयता बनी रही। आगे भी यहीं आना पसंद करूंगा।' },
  { id: 92, cat: 'repeat', lang: 'hi', tone: 'neutral', text: 'पहले भी यहाँ आ चुके हैं। इस बार का अनुभव भी पहले की तरह सामान्य और ठीक रहा।' },
  { id: 93, cat: 'repeat', lang: 'hi', tone: 'positive', text: 'मथुरा में जब भी [संबंधित काम या उत्पाद] की आवश्यकता होती है, गिरधर मुरारी हमारी पहली पसंद रहता है। विश्वसनीयता हमेशा बनी रहती है।' },
  { id: 94, cat: 'repeat', lang: 'hi', tone: 'constructive', text: 'हम पुराने ग्राहक हैं, लेकिन इस बार थोड़ी जल्दीबाजी महसूस हुई। आशा है कि वे अपने पुराने व्यक्तिगत जुड़ाव को बनाए रखेंगे।' },
  { id: 95, cat: 'repeat', lang: 'hi', tone: 'positive', text: 'हमारा परिवार लंबे समय से गिरधर मुरारी पर विश्वास करता आ रहा है। वे हमेशा अपनी प्रतिबद्धता पर खरे उतरते हैं।' },
  { id: 96, cat: 'improvement', lang: 'hi', tone: 'constructive', text: 'समग्र रूप से अनुभव अच्छा रहा। एक सुझाव के तौर पर [डिजिटल भुगतान, कैटलॉग या तेजी से बिलिंग] की सुविधा जोड़ना और बेहतर रहेगा।' },
  { id: 97, cat: 'improvement', lang: 'hi', tone: 'constructive', text: 'गिरधर मुरारी की सेवा से संतुष्ट हूँ। सुझाव है कि [स्थान पर बैठने की व्यवस्था या स्पष्ट संकेत] में थोड़ा सुधार किया जाए।' },
  { id: 98, cat: 'improvement', lang: 'hi', tone: 'constructive', text: 'काम अच्छा है, पर सप्ताहांत या त्योहारों के समय [प्रतीक्षा समय या फोन पर संपर्क] को अधिक सुगम बनाने पर विचार किया जा सकता है।' },
  { id: 99, cat: 'improvement', lang: 'hi', tone: 'constructive', text: 'टीम का प्रयास सराहनीय है। और बेहतर अनुभव के लिए [अपनी कोई व्यक्तिगत सलाह लिखें] पर काम किया जा सकता है।' },
  { id: 100, cat: 'improvement', lang: 'hi', tone: 'constructive', text: '[उत्पाद या सेवा] अच्छी थी, लेकिन यदि प्रबंधन [सुधार योग्य क्षेत्र] पर थोड़ा ध्यान दे तो ग्राहक अनुभव और भी उत्कृष्ट हो जाएगा।' }
];

const CATEGORY_NAMES = {
  overall: { en: 'Overall Experience', hi: 'समग्र अनुभव' },
  staff: { en: 'Staff Behaviour', hi: 'कर्मचारियों का व्यवहार' },
  service: { en: 'Customer Service', hi: 'ग्राहक सेवा' },
  communication: { en: 'Communication', hi: 'संवाद एवं सूचना' },
  quality: { en: 'Product Quality', hi: 'गुणवत्ता' },
  value: { en: 'Value for Money', hi: 'मूल्य और लागत' },
  convenience: { en: 'Convenience', hi: 'सुविधा और पहुंच' },
  cleanliness: { en: 'Cleanliness', hi: 'स्वच्छता' },
  repeat: { en: 'Repeat Visits', hi: 'पुनः आगमन' },
  improvement: { en: 'Improvement Suggestions', hi: 'सुधार के सुझाव' },
};

// Application State
let currentLang = localStorage.getItem('gm_review_lang') || 'en';
let currentCategory = 'all';
let currentSearch = '';
let drafts = JSON.parse(localStorage.getItem('gm_review_drafts') || '{}');

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageToggle();
  setupFilters();
  setupSearch();
  renderCards();
  initQRGenerator();
});

function setupLanguageToggle() {
  const enBtn = document.getElementById('lang-en');
  const hiBtn = document.getElementById('lang-hi');

  function updateActive() {
    if (currentLang === 'hi') {
      hiBtn.classList.add('active');
      enBtn.classList.remove('active');
      document.body.classList.add('font-hindi');
    } else {
      enBtn.classList.add('active');
      hiBtn.classList.remove('active');
      document.body.classList.remove('font-hindi');
    }
    updateStaticLabels();
    renderCards();
  }

  enBtn.addEventListener('click', () => {
    currentLang = 'en';
    localStorage.setItem('gm_review_lang', 'en');
    updateActive();
  });

  hiBtn.addEventListener('click', () => {
    currentLang = 'hi';
    localStorage.setItem('gm_review_lang', 'hi');
    updateActive();
  });

  updateActive();
}

function updateStaticLabels() {
  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');
  const searchInput = document.getElementById('search-input');

  if (currentLang === 'hi') {
    if (heroTitle) heroTitle.innerText = 'अपना अनुभव साझा करें';
    if (heroDesc) heroDesc.innerText = 'मथुरा स्थित गिरधर मुरारी में अपने वास्तविक अनुभव को शब्दों में ढालने के लिए नीचे दिए गए संपादन योग्य सुझावों में से चुनें। किसी भी टेम्पलेट को आवश्यकतानुसार बदलें, कॉपी करें और Google पर पोस्ट करें।';
    if (searchInput) searchInput.placeholder = 'सुझाव या श्रेणी खोजें...';
  } else {
    if (heroTitle) heroTitle.innerText = 'Share Your Experience';
    if (heroDesc) heroDesc.innerText = 'Select an editable suggestion below to help articulate your genuine customer experience at Girdhar Morari in Mathura. Personalize the bracketed details, copy the text, and publish on Google.';
    if (searchInput) searchInput.placeholder = 'Search suggestions or category...';
  }
}

function setupFilters() {
  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderCards();
    });
  });

  const clearBtn = document.getElementById('clear-filters-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentSearch = '';
      const sInput = document.getElementById('search-input');
      if (sInput) sInput.value = '';
      catButtons.forEach(b => {
        b.classList.toggle('active', b.dataset.category === 'all');
      });
      renderCards();
    });
  }
}

function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderCards();
    });
  }
}

function renderCards() {
  const container = document.getElementById('suggestions-grid');
  const countBadge = document.getElementById('filtered-count');
  if (!container) return;

  // Filter items
  const filtered = SUGGESTIONS.filter(item => {
    // Language check: if lang is 'en', show English; if 'hi', show Hindi.
    if (item.lang !== currentLang) return false;

    // Category check
    if (currentCategory !== 'all' && item.cat !== currentCategory) return false;

    // Search query check
    if (currentSearch) {
      const draftText = drafts[item.id] || item.text;
      const catName = CATEGORY_NAMES[item.cat][currentLang] || '';
      const matchText = draftText.toLowerCase().includes(currentSearch);
      const matchCat = catName.toLowerCase().includes(currentSearch);
      if (!matchText && !matchCat) return false;
    }

    return true;
  });

  if (countBadge) {
    countBadge.innerText = currentLang === 'hi' 
      ? `दिखाए जा रहे हैं: ${filtered.length} / 50 सुझाव`
      : `Showing ${filtered.length} of 50 suggestions`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #fff; border-radius: 16px; border: 1px solid var(--border-light);">
        <p style="font-weight: 600; color: var(--maroon-primary);">${currentLang === 'hi' ? 'कोई मेल खाने वाला सुझाव नहीं मिला।' : 'No matching suggestions found.'}</p>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">${currentLang === 'hi' ? 'कृपया अपनी खोज या फ़िल्टर बदलें।' : 'Try clearing your search or changing the filter category.'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const text = drafts[item.id] || item.text;
    const catLabel = CATEGORY_NAMES[item.cat][currentLang] || CATEGORY_NAMES[item.cat].en;
    const isEdited = text !== item.text;
    const toneClass = `tone-${item.tone}`;
    const toneText = item.tone === 'positive' 
      ? (currentLang === 'hi' ? 'सकारात्मक' : 'Positive')
      : item.tone === 'neutral' 
        ? (currentLang === 'hi' ? 'संतुलित' : 'Balanced')
        : (currentLang === 'hi' ? 'सुधार' : 'Constructive');

    return `
      <div class="review-card" data-id="${item.id}">
        <div>
          <div class="card-top">
            <span class="card-num">#${String(item.id).padStart(2, '0')}</span>
            <span class="card-cat">${catLabel}</span>
            <span class="card-tone ${toneClass}">${toneText}</span>
          </div>
          <textarea class="card-textarea" id="textarea-${item.id}" oninput="handleTextChange(${item.id}, this.value)">${escapeHtml(text)}</textarea>
          <div class="card-stats">
            <span id="char-count-${item.id}">${text.length} ${currentLang === 'hi' ? 'अक्षर' : 'chars'}</span>
            ${isEdited ? `<span style="color: var(--saffron-accent); font-weight: 600;">${currentLang === 'hi' ? 'संपादित' : 'Edited'}</span>` : ''}
          </div>
        </div>
        <div class="card-actions">
          <div style="display: flex; gap: 6px;">
            <button class="btn-copy" id="btn-copy-${item.id}" onclick="copyReview(${item.id})">
              ${currentLang === 'hi' ? 'कॉपी करें' : 'Copy Review Text'}
            </button>
            ${isEdited ? `
              <button class="btn-reset" onclick="resetReview(${item.id})">
                ${currentLang === 'hi' ? 'रीसेट' : 'Reset'}
              </button>
            ` : ''}
          </div>
          <a href="${CONFIG.reviewUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 0.75rem; color: var(--saffron-accent); font-weight: 600;">
            ${currentLang === 'hi' ? 'Google समीक्षा' : 'Review on Google'} &rarr;
          </a>
        </div>
      </div>
    `;
  }).join('');
}

window.handleTextChange = function(id, value) {
  drafts[id] = value;
  localStorage.setItem('gm_review_drafts', JSON.stringify(drafts));
  const charSpan = document.getElementById(`char-count-${id}`);
  if (charSpan) {
    charSpan.innerText = `${value.length} ${currentLang === 'hi' ? 'अक्षर' : 'chars'}`;
  }
};

window.resetReview = function(id) {
  const item = SUGGESTIONS.find(s => s.id === id);
  if (item) {
    delete drafts[id];
    localStorage.setItem('gm_review_drafts', JSON.stringify(drafts));
    renderCards();
    showToast(currentLang === 'hi' ? 'मूल टेम्पलेट बहाल कर दिया गया।' : 'Template reset to original.');
  }
};

window.copyReview = function(id) {
  const textarea = document.getElementById(`textarea-${id}`);
  if (!textarea) return;

  const text = textarea.value;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      onCopySuccess(id);
    }).catch(() => {
      fallbackCopy(textarea, id);
    });
  } else {
    fallbackCopy(textarea, id);
  }
};

function fallbackCopy(textarea, id) {
  textarea.select();
  document.execCommand('copy');
  onCopySuccess(id);
}

function onCopySuccess(id) {
  const btn = document.getElementById(`btn-copy-${id}`);
  if (btn) {
    btn.classList.add('copied');
    btn.innerText = currentLang === 'hi' ? 'कॉपी हो गया ✓' : 'Copied ✓';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerText = currentLang === 'hi' ? 'कॉपी करें' : 'Copy Review Text';
    }, 2500);
  }
  showToast(
    currentLang === 'hi'
      ? 'समीक्षा कॉपी हो गई! कृपया अपने वास्तविक अनुभव के अनुसार इसे संपादित करें।'
      : 'Text copied. Please personalize it to reflect your genuine experience before submitting to Google.'
  );
}

function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 4000);
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* QR Code Section Initialization */
function initQRGenerator() {
  const genBtn = document.getElementById('btn-generate-qr');
  const printBtn = document.getElementById('btn-print-qr');
  const downloadBtn = document.getElementById('btn-download-qr');
  const urlInput = document.getElementById('qr-input-url');

  if (genBtn && urlInput) {
    genBtn.addEventListener('click', () => {
      updateQRCanvas(urlInput.value);
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      downloadQRImage();
    });
  }

  // Initial draw
  if (urlInput) {
    updateQRCanvas(urlInput.value);
  }
}

function updateQRCanvas(url) {
  const canvas = document.getElementById('qr-canvas');
  if (!canvas) return;

  // Render QR via standard library or fallback to canvas renderer
  if (window.QRCode && window.QRCode.toCanvas) {
    window.QRCode.toCanvas(canvas, url, { width: 240, margin: 2, color: { dark: '#58111A', light: '#FFFFFF' } });
  } else {
    // Generate via direct SVG/Data Image
    const qrImg = new Image();
    qrImg.crossOrigin = 'anonymous';
    qrImg.onload = () => {
      const ctx = canvas.getContext('2d');
      canvas.width = 240;
      canvas.height = 240;
      ctx.drawImage(qrImg, 0, 0, 240, 240);
    };
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&color=58-17-26&data=${encodeURIComponent(url)}`;
  }
}

function downloadQRImage() {
  const canvas = document.getElementById('qr-canvas');
  if (!canvas) return;

  const offscreen = document.createElement('canvas');
  offscreen.width = 600;
  offscreen.height = 750;
  const ctx = offscreen.getContext('2d');

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 600, 750);

  ctx.strokeStyle = '#58111A';
  ctx.lineWidth = 8;
  ctx.strokeRect(16, 16, 568, 718);

  ctx.fillStyle = '#58111A';
  ctx.font = 'bold 30px serif';
  ctx.textAlign = 'center';
  ctx.fillText('GIRDHAR MORARI, MATHURA', 300, 70);

  ctx.fillStyle = '#D97706';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('SCAN TO REVIEW US ON GOOGLE', 300, 105);

  ctx.drawImage(canvas, 100, 140, 400, 400);

  ctx.fillStyle = '#6B5E59';
  ctx.font = '14px sans-serif';
  ctx.fillText('Thank you for sharing your genuine experience!', 300, 580);
  ctx.fillText('girdharmorarimathura.com', 300, 610);

  const a = document.createElement('a');
  a.download = 'Girdhar-Morari-Review-QR.png';
  a.href = offscreen.toDataURL('image/png');
  a.click();
}
