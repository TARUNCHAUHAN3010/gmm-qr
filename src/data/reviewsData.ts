/**
 * Review Suggestion Library for Girdhar Morari, Mathura (girdharmorarimathura.com)
 * Exactly 100 unique, editable review suggestions:
 * - 50 English suggestions across 10 categories (IDs 1 - 50)
 * - 50 Hindi suggestions across 10 categories (IDs 51 - 100)
 */

export type Language = 'en' | 'hi';

export type CategoryKey =
  | 'overall'
  | 'staff'
  | 'service'
  | 'communication'
  | 'quality'
  | 'value'
  | 'convenience'
  | 'cleanliness'
  | 'repeat'
  | 'improvement';

export interface CategoryInfo {
  key: CategoryKey;
  labelEn: string;
  labelHi: string;
}

export interface ReviewSuggestion {
  id: number;
  category: CategoryKey;
  language: Language;
  template: string;
  tone: 'positive' | 'neutral' | 'constructive';
}

export const CATEGORIES: CategoryInfo[] = [
  { key: 'overall', labelEn: 'Overall Experience', labelHi: 'समग्र अनुभव' },
  { key: 'staff', labelEn: 'Staff Behaviour', labelHi: 'कर्मचारियों का व्यवहार' },
  { key: 'service', labelEn: 'Customer Service', labelHi: 'ग्राहक सेवा' },
  { key: 'communication', labelEn: 'Communication', labelHi: 'संवाद एवं सूचना' },
  { key: 'quality', labelEn: 'Product / Service Quality', labelHi: 'गुणवत्ता' },
  { key: 'value', labelEn: 'Value for Money', labelHi: 'मूल्य और लागत' },
  { key: 'convenience', labelEn: 'Convenience', labelHi: 'सुविधा और पहुंच' },
  { key: 'cleanliness', labelEn: 'Cleanliness & Ambience', labelHi: 'स्वच्छता एवं रख-रखाव' },
  { key: 'repeat', labelEn: 'Repeat Visits', labelHi: 'पुनः आगमन' },
  { key: 'improvement', labelEn: 'Suggestions for Improvement', labelHi: 'सुधार के सुझाव' },
];

export const TARGET_KEYWORDS = [
  {
    key: 'dwarika-dheesh',
    labelEn: 'Guest House near Dwarika dheesh',
    labelHi: 'द्वारिकाधीश के पास गेस्ट हाउस',
    keyword: 'Guest House near Dwarika dheesh',
  },
  {
    key: 'vishram-ghar',
    labelEn: 'Hotel near Vishram Ghar',
    labelHi: 'विश्राम घर के पास होटल',
    keyword: 'hotel near vishram ghar',
  },
  {
    key: 'gujrat-samaj',
    labelEn: 'Gujrat Samaj Guest House',
    labelHi: 'गुजरात समाज गेस्ट हाउस',
    keyword: 'gujrat samaj guest house',
  },
];

export const REVIEW_SUGGESTIONS: ReviewSuggestion[] = [
  // ==========================================
  // ENGLISH SUGGESTIONS (1 - 50)
  // ==========================================

  // Category 1: Overall Experience (1 - 5)
  {
    id: 1,
    category: 'overall',
    language: 'en',
    tone: 'positive',
    template: 'My overall experience with Girdhar Morari in Mathura was very positive. If you are looking for a reliable guest house near Dwarika dheesh, this is a wonderful stay. We visited for [mention purpose or darshan] and found [describe what pleased you most]. Highly recommended!'
  },
  {
    id: 2,
    category: 'overall',
    language: 'en',
    tone: 'neutral',
    template: 'Visited Girdhar Morari recently for [mention product or service]. The experience was generally fair and met basic expectations regarding [mention aspect]. [Add any specific observation].'
  },
  {
    id: 3,
    category: 'overall',
    language: 'en',
    tone: 'positive',
    template: 'A pleasant encounter at Girdhar Morari, Mathura. The handling of [mention specific order or inquiry] was done in a timely manner. I particularly appreciated [highlight specific detail].'
  },
  {
    id: 4,
    category: 'overall',
    language: 'en',
    tone: 'constructive',
    template: 'Had an average overall experience during my recent visit to Girdhar Morari. While [mention positive aspect] was good, [mention what could be better] could be managed more smoothly.'
  },
  {
    id: 5,
    category: 'overall',
    language: 'en',
    tone: 'positive',
    template: 'Had an authentic and welcoming experience at Girdhar Morari in Mathura. The team assisted me with [mention service or item], and the entire process was [describe your feeling].'
  },

  // Category 2: Staff Behaviour (6 - 10)
  {
    id: 6,
    category: 'staff',
    language: 'en',
    tone: 'positive',
    template: 'The staff at Girdhar Morari was courteous and attentive during my visit. Special thanks to [mention staff name or department if known] who helped me choose [mention product/service].'
  },
  {
    id: 7,
    category: 'staff',
    language: 'en',
    tone: 'neutral',
    template: 'Interacted with the staff regarding [inquiry or purchase]. They answered standard questions satisfactorily, though during peak rush [mention if guidance was hurried or fine].'
  },
  {
    id: 8,
    category: 'staff',
    language: 'en',
    tone: 'positive',
    template: 'Appreciated the respectful and polite demeanor of the team at Girdhar Morari in Mathura. They took time to explain [mention details about product or billing] without rushing.'
  },
  {
    id: 9,
    category: 'staff',
    language: 'en',
    tone: 'constructive',
    template: 'The staff was generally cooperative, but there seemed to be some confusion regarding [mention product details or counter queue]. A bit more coordinated teamwork would be helpful.'
  },
  {
    id: 10,
    category: 'staff',
    language: 'en',
    tone: 'positive',
    template: 'Found the team at Girdhar Morari to be patient and well-mannered. They addressed my queries regarding [mention specific item] with genuine hospitality.'
  },

  // Category 3: Customer Service (11 - 15)
  {
    id: 11,
    category: 'service',
    language: 'en',
    tone: 'positive',
    template: 'Customer service was responsive and helpful. When I asked about [specific request or product availability], the team handled it promptly and professionally.'
  },
  {
    id: 12,
    category: 'service',
    language: 'en',
    tone: 'neutral',
    template: 'The customer service at Girdhar Morari was adequate. My request for [describe request] was processed within [mention wait time], which was acceptable.'
  },
  {
    id: 13,
    category: 'service',
    language: 'en',
    tone: 'positive',
    template: 'Really good customer support during my visit. They made sure my requirements for [mention order or inquiry] were clarified before proceeding.'
  },
  {
    id: 14,
    category: 'service',
    language: 'en',
    tone: 'constructive',
    template: 'Customer assistance was decent overall, though it took longer than expected to attend to [mention specific query or counter]. Response time could be slightly improved.'
  },
  {
    id: 15,
    category: 'service',
    language: 'en',
    tone: 'positive',
    template: 'Felt well looked after as a customer. The team at Girdhar Morari showed dedication in helping me finalize [mention product or service choice].'
  },

  // Category 4: Communication (16 - 20)
  {
    id: 16,
    category: 'communication',
    language: 'en',
    tone: 'positive',
    template: 'Communication was transparent and straightforward. The details provided regarding [pricing, availability, or process] were clear and matched my final experience.'
  },
  {
    id: 17,
    category: 'communication',
    language: 'en',
    tone: 'neutral',
    template: 'Received standard information regarding [mention product or order]. Most details were clear, though I had to follow up once regarding [mention aspect].'
  },
  {
    id: 18,
    category: 'communication',
    language: 'en',
    tone: 'positive',
    template: 'I appreciated the honest and direct communication from the team. They gave accurate guidance on [mention timeline, choices, or rates] without ambiguous promises.'
  },
  {
    id: 19,
    category: 'communication',
    language: 'en',
    tone: 'constructive',
    template: 'Information on [mention item or policy] could be communicated more proactively. It would help if customers were briefed earlier on [mention specific detail].'
  },
  {
    id: 20,
    category: 'communication',
    language: 'en',
    tone: 'positive',
    template: 'Easy to communicate with and very accessible. They patiently answered all my questions regarding [mention order or inquiry] in Mathura.'
  },

  // Category 5: Product or Service Quality (21 - 25)
  {
    id: 21,
    category: 'quality',
    language: 'en',
    tone: 'positive',
    template: 'The quality of [mention specific product or service] from Girdhar Morari exceeded my expectations. The finish and attention to detail were evident.'
  },
  {
    id: 22,
    category: 'quality',
    language: 'en',
    tone: 'neutral',
    template: 'Purchased/used [mention product or service]. The quality was standard and reasonably aligned with what was described. It serves the intended purpose well.'
  },
  {
    id: 23,
    category: 'quality',
    language: 'en',
    tone: 'positive',
    template: 'Very satisfied with the craftsmanship and reliability of [mention product or service]. You can tell they take pride in what they offer in Mathura.'
  },
  {
    id: 24,
    category: 'quality',
    language: 'en',
    tone: 'constructive',
    template: 'The quality of [mention item] was decent, though [mention specific element or packaging] could be refined for a better overall impression.'
  },
  {
    id: 25,
    category: 'quality',
    language: 'en',
    tone: 'positive',
    template: 'Consistently good standard for [mention product/service]. Everything arrived/was provided in good order, matching the specifications we discussed.'
  },

  // Category 6: Value for Money (26 - 30)
  {
    id: 26,
    category: 'value',
    language: 'en',
    tone: 'positive',
    template: 'Found the pricing for [mention product or service] to be fair and justified given the standard offered. Felt like a good value purchase.'
  },
  {
    id: 27,
    category: 'value',
    language: 'en',
    tone: 'neutral',
    template: 'Prices at Girdhar Morari seem comparable to the prevailing market rates in Mathura for [mention item]. Neither overly expensive nor a bargain.'
  },
  {
    id: 28,
    category: 'value',
    language: 'en',
    tone: 'positive',
    template: 'Felt that I received genuine worth for the amount paid for [mention product/service]. Reasonable rates paired with dependable quality.'
  },
  {
    id: 29,
    category: 'value',
    language: 'en',
    tone: 'constructive',
    template: 'The overall offering was acceptable, but [mention specific item or charge] felt slightly steep compared to alternatives. Clearer price breakdowns would help.'
  },
  {
    id: 30,
    category: 'value',
    language: 'en',
    tone: 'positive',
    template: 'Honest pricing with no hidden surprises. Appreciated the transparent estimate given upfront for [mention product or service].'
  },

  // Category 7: Convenience (31 - 35)
  {
    id: 31,
    category: 'convenience',
    language: 'en',
    tone: 'positive',
    template: 'As a convenient guest house near Dwarika dheesh temple, Girdhar Morari made our Mathura visit very comfortable. The walking distance to the temple and [mention room or service aspect] saved us plenty of time.'
  },
  {
    id: 32,
    category: 'convenience',
    language: 'en',
    tone: 'neutral',
    template: 'If you are searching for a dependable hotel near vishram ghar in Mathura, Girdhar Morari is located conveniently close to the ghats. [Mention parking, morning yamuna ji aarti, or transit note].'
  },
  {
    id: 33,
    category: 'convenience',
    language: 'en',
    tone: 'positive',
    template: 'Convenient location near gujrat samaj guest house in Mathura. The check-in was smooth, and finding [mention room, specific facility, or help desk] was quick and easy.'
  },
  {
    id: 34,
    category: 'convenience',
    language: 'en',
    tone: 'constructive',
    template: 'The experience was good, but the queue or wait time around [mention peak time or counter] could be organized more efficiently for customer convenience.'
  },
  {
    id: 35,
    category: 'convenience',
    language: 'en',
    tone: 'positive',
    template: 'Smooth experience overall. They accommodated my schedule when I needed [mention urgent delivery, pickup, or consultation].'
  },

  // Category 8: Cleanliness & Ambience (36 - 40)
  {
    id: 36,
    category: 'cleanliness',
    language: 'en',
    tone: 'positive',
    template: 'The premises were neat, well-maintained, and orderly during my visit. It created a comfortable atmosphere for browsing [mention items].'
  },
  {
    id: 37,
    category: 'cleanliness',
    language: 'en',
    tone: 'neutral',
    template: 'The store/facility environment was reasonably tidy and presentable given the foot traffic on [mention day or time].'
  },
  {
    id: 38,
    category: 'cleanliness',
    language: 'en',
    tone: 'positive',
    template: 'Appreciated the cleanliness and hygienic presentation of the space and items displayed. It reflects good management standards.'
  },
  {
    id: 39,
    category: 'cleanliness',
    language: 'en',
    tone: 'constructive',
    template: 'The space was generally okay, though during busy hours the [mention seating, display area, or counter] could be kept a bit tidier.'
  },
  {
    id: 40,
    category: 'cleanliness',
    language: 'en',
    tone: 'positive',
    template: 'Well-kept surroundings and organized displays made it easy to review [mention products or options] comfortably.'
  },

  // Category 9: Repeat Visits (41 - 45)
  {
    id: 41,
    category: 'repeat',
    language: 'en',
    tone: 'positive',
    template: 'This was my second visit to Girdhar Morari in Mathura, and the consistency in [mention product/service] has been reassuring. Will continue to visit.'
  },
  {
    id: 42,
    category: 'repeat',
    language: 'en',
    tone: 'neutral',
    template: 'Have visited Girdhar Morari previously. While my earlier experience was [mention], this recent visit was [describe if similar or different].'
  },
  {
    id: 43,
    category: 'repeat',
    language: 'en',
    tone: 'positive',
    template: 'A dependable stop in Mathura whenever I need [mention product/service category]. They have maintained reliable standards over time.'
  },
  {
    id: 44,
    category: 'repeat',
    language: 'en',
    tone: 'constructive',
    template: 'Have been a returning visitor, but felt this recent visit was slightly rushed compared to previous times. Hope they retain the earlier personal touch.'
  },
  {
    id: 45,
    category: 'repeat',
    language: 'en',
    tone: 'positive',
    template: 'Reliable long-term association with Girdhar Morari. Whenever our family needs [mention requirement], they deliver as promised.'
  },

  // Category 10: Suggestions for Improvement (46 - 50)
  {
    id: 46,
    category: 'improvement',
    language: 'en',
    tone: 'constructive',
    template: 'Overall a decent experience with [mention product/service]. As a suggestion, adding [online catalog, faster billing, or more display variety] would make it even better.'
  },
  {
    id: 47,
    category: 'improvement',
    language: 'en',
    tone: 'constructive',
    template: 'Appreciate the service at Girdhar Morari. One constructive suggestion would be to provide [mention clearer signage, digital receipts, or appointment slots].'
  },
  {
    id: 48,
    category: 'improvement',
    language: 'en',
    tone: 'constructive',
    template: 'Good encounter overall. Would suggest improving [mention waiting area, stock updates, or telephone response time] during peak weekend rush.'
  },
  {
    id: 49,
    category: 'improvement',
    language: 'en',
    tone: 'constructive',
    template: 'The team does good work on [mention aspect]. To improve further, they might consider [mention specific customer recommendation].'
  },
  {
    id: 50,
    category: 'improvement',
    language: 'en',
    tone: 'constructive',
    template: 'Satisfied with [mention product/service], but hope management looks into [mention specific feedback] for a more seamless customer journey.'
  },

  // ==========================================
  // HINDI SUGGESTIONS (51 - 100)
  // ==========================================

  // Category 1: Overall Experience (51 - 55)
  {
    id: 51,
    category: 'overall',
    language: 'hi',
    tone: 'positive',
    template: 'मथुरा में द्वारिकाधीश जी के मंदिर के पास गेस्ट हाउस (Guest House near Dwarika dheesh) के रूप में गिरधर मुरारी में हमारा प्रवास बहुत सुखद रहा। हम [दर्शन या पारिवारिक यात्रा] के लिए आए थे और [जो बात सबसे अच्छी लगी] विशेष रूप से पसंद आई। सभी श्रद्धालुओं को यहाँ ठहरने की सलाह दूंगा।'
  },
  {
    id: 52,
    category: 'overall',
    language: 'hi',
    tone: 'neutral',
    template: 'हाल ही में गिरधर मुरारी में [काम या उत्पाद] के लिए जाना हुआ। अनुभव सामान्य और संतोषजनक रहा। [अपनी कोई विशेष बात जोड़ें]।'
  },
  {
    id: 53,
    category: 'overall',
    language: 'hi',
    tone: 'positive',
    template: 'मथुरा स्थित गिरधर मुरारी में सेवा और व्यवस्था सराहनीय रही। [विशिष्ट कार्य या ऑर्डर] का काम समय पर पूरा हुआ। [विशेष अनुभव लिखें]। धन्यवाद!'
  },
  {
    id: 54,
    category: 'overall',
    language: 'hi',
    tone: 'constructive',
    template: 'गिरधर मुरारी में मेरा समग्र अनुभव औसत रहा। [जो बात ठीक थी] अच्छी थी, लेकिन [जिसमें सुधार की आवश्यकता है] पर थोड़ा और ध्यान दिया जा सकता है।'
  },
  {
    id: 55,
    category: 'overall',
    language: 'hi',
    tone: 'positive',
    template: 'मथुरा में गिरधर मुरारी का व्यवहार और कार्यशैली बहुत विश्वसनीय लगी। [सामग्री या सेवा] को लेकर जो अपेक्षा थी, वह पूरी हुई।'
  },

  // Category 2: Staff Behaviour (56 - 60)
  {
    id: 56,
    category: 'staff',
    language: 'hi',
    tone: 'positive',
    template: 'गिरधर मुरारी के कर्मचारियों का व्यवहार बहुत ही विनम्र और सहयोगी था। उन्होंने [उत्पाद या जानकारी] चुनने में धैर्यपूर्वक पूरी सहायता की।'
  },
  {
    id: 57,
    category: 'staff',
    language: 'hi',
    tone: 'neutral',
    template: 'स्टाफ से [पूछताछ या कार्य] के संबंध में बातचीत हुई। जानकारी ठीक से दी गई, हालांकि व्यस्त समय में [अपनी कोई टिप्पणी लिखें]।'
  },
  {
    id: 58,
    category: 'staff',
    language: 'hi',
    tone: 'positive',
    template: 'यहाँ के कर्मचारियों का आदरपूर्ण और शांत स्वभाव बहुत अच्छा लगा। उन्होंने [सामग्री या बिलिंग] को लेकर बिना किसी जल्दबाजी के सब समझाया।'
  },
  {
    id: 59,
    category: 'staff',
    language: 'hi',
    tone: 'constructive',
    template: 'कर्मचारी सहयोगी थे, परंतु [किसी विशेष काउंटर या जानकारी] को लेकर थोड़ा समन्वय कम दिखा। इसे और बेहतर बनाया जा सकता है।'
  },
  {
    id: 60,
    category: 'staff',
    language: 'hi',
    tone: 'positive',
    template: 'गिरधर मुरारी के सदस्यों ने पूरी आत्मीयता से स्वागत किया और [अपनी आवश्यकता] को अच्छी तरह समझकर उचित मार्गदर्शन दिया।'
  },

  // Category 3: Customer Service (61 - 65)
  {
    id: 61,
    category: 'service',
    language: 'hi',
    tone: 'positive',
    template: 'ग्राहक सेवा त्वरित और प्रभावी रही। जब मैंने [विशिष्ट प्रश्न या अनुरोध] किया, तो टीम ने तुरंत और जिम्मेदारी से समाधान निकाला।'
  },
  {
    id: 62,
    category: 'service',
    language: 'hi',
    tone: 'neutral',
    template: 'गिरधर मुरारी में कस्टमर सर्विस ठीक-ठाक रही। मेरे [काम या ऑर्डर] को पूरा होने में [समय] लगा, जो स्वीकार्य था।'
  },
  {
    id: 63,
    category: 'service',
    language: 'hi',
    tone: 'positive',
    template: 'ग्राहक संतुष्टि पर इनका विशेष ध्यान देखने को मिला। [ऑर्डर या पूछताछ] के दौरान हर बात को स्पष्ट किया गया।'
  },
  {
    id: 64,
    category: 'service',
    language: 'hi',
    tone: 'constructive',
    template: 'सेवा आमतौर पर ठीक थी, लेकिन [पूछताछ या काम] के लिए थोड़ा अधिक इंतजार करना पड़ा। प्रतिक्रिया समय में थोड़ा सुधार अपेक्षित है।'
  },
  {
    id: 65,
    category: 'service',
    language: 'hi',
    tone: 'positive',
    template: 'यहाँ आकर लगा कि ग्राहकों के समय और विश्वास का पूरा सम्मान किया जाता है। [उत्पाद या सेवा] के चयन में पूरी मदद मिली।'
  },

  // Category 4: Communication (66 - 70)
  {
    id: 66,
    category: 'communication',
    language: 'hi',
    tone: 'positive',
    template: 'जानकारी और बातचीत में पूरी पारदर्शिता रही। [मूल्य, उपलब्धता या प्रक्रिया] के बारे में जो बताया गया, वही सही साबित हुआ।'
  },
  {
    id: 67,
    category: 'communication',
    language: 'hi',
    tone: 'neutral',
    template: 'गिरधर मुरारी से [उत्पाद या सेवा] के बारे में सामान्य जानकारी मिली। बातें स्पष्ट थीं, यद्यपि [किसी पहलू] के लिए दोबारा पूछना पड़ा।'
  },
  {
    id: 68,
    category: 'communication',
    language: 'hi',
    tone: 'positive',
    template: 'स्पष्ट और सच्ची जानकारी देना इनकी सबसे अच्छी बात लगी। [सामग्री या समय-सीमा] के बारे में कोई भ्रामक वादा नहीं किया गया।'
  },
  {
    id: 69,
    category: 'communication',
    language: 'hi',
    tone: 'constructive',
    template: '[नियम या उत्पाद विवरण] के संबंध में पहले से अधिक स्पष्ट जानकारी दी जानी चाहिए, ताकि ग्राहकों को किसी तरह का संशय न रहे।'
  },
  {
    id: 70,
    category: 'communication',
    language: 'hi',
    tone: 'positive',
    template: 'बातचीत करना बहुत सहज और सरल रहा। हमारे हर सवाल का संतुष्टिपूर्ण उत्तर मथुरा के गिरधर मुरारी की टीम ने दिया।'
  },

  // Category 5: Product or Service Quality (71 - 75)
  {
    id: 71,
    category: 'quality',
    language: 'hi',
    tone: 'positive',
    template: 'गिरधर मुरारी से प्राप्त [उत्पाद या सेवा] की गुणवत्ता बहुत उम्दा निकली। फिनिशिंग और मजबूती में कोई कमी नहीं है।'
  },
  {
    id: 72,
    category: 'quality',
    language: 'hi',
    tone: 'neutral',
    template: 'यहाँ से [उत्पाद या सेवा] ली थी। गुणवत्ता सामान्य और उम्मीद के अनुसार ठीक है। उपयोग में कोई बड़ी परेशानी नहीं आई।'
  },
  {
    id: 73,
    category: 'quality',
    language: 'hi',
    tone: 'positive',
    template: 'मथुरा में गिरधर मुरारी के कार्य और गुणवत्ता का स्तर वास्तव में विश्वसनीय है। [उत्पाद] देखकर कारीगरी और मेहनत साफ नजर आती है।'
  },
  {
    id: 74,
    category: 'quality',
    language: 'hi',
    tone: 'constructive',
    template: 'उत्पाद की गुणवत्ता ठीक थी, परंतु [पैकिंग या किसी विशेष पहलू] में थोड़ा और सुधार किया जा सकता है जिससे प्रभाव और बेहतर हो।'
  },
  {
    id: 75,
    category: 'quality',
    language: 'hi',
    tone: 'positive',
    template: 'गुणवत्ता के मामले में कोई समझौता नहीं दिखा। जैसी बात तय हुई थी, वैसा ही [उत्पाद या कार्य] तैयार मिला।'
  },

  // Category 6: Value for Money (76 - 80)
  {
    id: 76,
    category: 'value',
    language: 'hi',
    tone: 'positive',
    template: '[उत्पाद या सेवा] का मूल्य गुणवत्ता और सेवा के लिहाज से बिल्कुल उचित और तर्कसंगत लगा। पैसे का सही मोल मिला।'
  },
  {
    id: 77,
    category: 'value',
    language: 'hi',
    tone: 'neutral',
    template: 'मथुरा के स्थानीय बाजार के अनुसार गिरधर मुरारी के दाम सामान्य हैं। न बहुत महंगे हैं और न बहुत सस्ते।'
  },
  {
    id: 78,
    category: 'value',
    language: 'hi',
    tone: 'positive',
    template: 'उचित दर पर अच्छी गुणवत्ता मिली। [उत्पाद/सेवा] के लिए जो खर्च किया, उससे पूरी संतुष्टि मिली।'
  },
  {
    id: 79,
    category: 'value',
    language: 'hi',
    tone: 'constructive',
    template: 'सामग्री ठीक थी, लेकिन [किसी विशिष्ट वस्तु या सेवा] का मूल्य थोड़ा अधिक प्रतीत हुआ। दरों में थोड़ी अधिक स्पष्टता होनी चाहिए।'
  },
  {
    id: 80,
    category: 'value',
    language: 'hi',
    tone: 'positive',
    template: 'स्पष्ट मूल्य निर्धारण और बिना किसी छुपे हुए शुल्क के काम हुआ। अनुमानित खर्च पहले ही स्पष्ट कर दिया गया था।'
  },

  // Category 7: Convenience (81 - 85)
  {
    id: 81,
    category: 'convenience',
    language: 'hi',
    tone: 'positive',
    template: 'विश्राम घाट/विश्राम घर के पास होटल (hotel near vishram ghar) की तलाश में गिरधर मुरारी सबसे सुविधाजनक रहा। यमुना जी की आरती और द्वारिकाधीश मंदिर दर्शन दोनों के लिए पैदल दूरी बहुत उत्तम है।'
  },
  {
    id: 82,
    category: 'convenience',
    language: 'hi',
    tone: 'neutral',
    template: 'गुजरात समाज गेस्ट हाउस (gujrat samaj guest house) व मथुरा के मुख्य तीर्थ स्थलों के निकट स्थित होने से गिरधर मुरारी तक पहुंचना बहुत आसान रहा। [कमरे व आतिथ्य] को लेकर अनुभव बहुत सहज रहा।'
  },
  {
    id: 83,
    category: 'convenience',
    language: 'hi',
    tone: 'positive',
    template: 'मथुरा में द्वारिकाधीश मंदिर और विश्राम घाट के समीप गेस्ट हाउस (Guest House near Dwarika dheesh) की तलाश कर रहे परिवारों के लिए गिरधर मुरारी एक शांत, सुरक्षित और सुव्यवस्थित विकल्प है।'
  },
  {
    id: 84,
    category: 'convenience',
    language: 'hi',
    tone: 'constructive',
    template: 'अनुभव संतोषजनक था, पर भीड़ के समय [काउंटर या कतार] को और व्यवस्थित किया जा सकता है ताकि ग्राहकों को सुविधा हो।'
  },
  {
    id: 85,
    category: 'convenience',
    language: 'hi',
    tone: 'positive',
    template: 'ग्राहक की सुविधा को प्राथमिकता दी गई और हमारे समय की अनुकूलता के अनुसार [काम या डिलीवरी] का प्रबंध किया गया।'
  },

  // Category 8: Cleanliness & Ambience (86 - 90)
  {
    id: 86,
    category: 'cleanliness',
    language: 'hi',
    tone: 'positive',
    template: 'परिसर बहुत साफ-सुथरा और व्यवस्थित था। स्वच्छ माहौल में [सामग्री देखना या बात करना] बहुत सुखद रहा।'
  },
  {
    id: 87,
    category: 'cleanliness',
    language: 'hi',
    tone: 'neutral',
    template: 'भीड़-भाड़ के बावजूद दुकान/परिसर का रख-रखाव सामान्य रूप से ठीक पाया गया।'
  },
  {
    id: 88,
    category: 'cleanliness',
    language: 'hi',
    tone: 'positive',
    template: 'स्वच्छता और व्यवस्था का विशेष ध्यान रखा गया है, जो एक अच्छी और प्रतिष्ठित जगह की पहचान है।'
  },
  {
    id: 89,
    category: 'cleanliness',
    language: 'hi',
    tone: 'constructive',
    template: 'जगह ठीक थी, लेकिन व्यस्त समय में [बैठने की जगह या काउंटर] की सफाई पर थोड़ा और नियमित ध्यान दिया जाना चाहिए।'
  },
  {
    id: 90,
    category: 'cleanliness',
    language: 'hi',
    tone: 'positive',
    template: 'सुव्यवस्थित डिस्प्ले और स्वच्छ वातावरण के कारण खरीदारी या बातचीत का अनुभव बहुत सहज रहा।'
  },

  // Category 9: Repeat Visits (91 - 95)
  {
    id: 91,
    category: 'repeat',
    language: 'hi',
    tone: 'positive',
    template: 'गिरधर मुरारी, मथुरा में यह मेरा दूसरा/तीसरा अनुभव था और हमेशा की तरह इस बार भी विश्वसनीयता बनी रही। आगे भी यहीं आना पसंद करूंगा।'
  },
  {
    id: 92,
    category: 'repeat',
    language: 'hi',
    tone: 'neutral',
    template: 'पहले भी यहाँ आ चुके हैं। इस बार का अनुभव भी पहले की तरह सामान्य और ठीक रहा।'
  },
  {
    id: 93,
    category: 'repeat',
    language: 'hi',
    tone: 'positive',
    template: 'मथुरा में जब भी [संबंधित काम या उत्पाद] की आवश्यकता होती है, गिरधर मुरारी हमारी पहली पसंद रहता है। विश्वसनीयता हमेशा बनी रहती है।'
  },
  {
    id: 94,
    category: 'repeat',
    language: 'hi',
    tone: 'constructive',
    template: 'हम पुराने ग्राहक हैं, लेकिन इस बार थोड़ी जल्दीबाजी महसूस हुई। आशा है कि वे अपने पुराने व्यक्तिगत जुड़ाव को बनाए रखेंगे।'
  },
  {
    id: 95,
    category: 'repeat',
    language: 'hi',
    tone: 'positive',
    template: 'हमारा परिवार लंबे समय से गिरधर मुरारी पर विश्वास करता आ रहा है। वे हमेशा अपनी प्रतिबद्धता पर खरे उतरते हैं।'
  },

  // Category 10: Suggestions for Improvement (96 - 100)
  {
    id: 96,
    category: 'improvement',
    language: 'hi',
    tone: 'constructive',
    template: 'समग्र रूप से अनुभव अच्छा रहा। एक सुझाव के तौर पर [डिजिटल भुगतान, कैटलॉग या तेजी से बिलिंग] की सुविधा जोड़ना और बेहतर रहेगा।'
  },
  {
    id: 97,
    category: 'improvement',
    language: 'hi',
    tone: 'constructive',
    template: 'गिरधर मुरारी की सेवा से संतुष्ट हूँ। सुझाव है कि [स्थान पर बैठने की व्यवस्था या स्पष्ट संकेत] में थोड़ा सुधार किया जाए।'
  },
  {
    id: 98,
    category: 'improvement',
    language: 'hi',
    tone: 'constructive',
    template: 'काम अच्छा है, पर सप्ताहांत या त्योहारों के समय [प्रतीक्षा समय या फोन पर संपर्क] को अधिक सुगम बनाने पर विचार किया जा सकता है।'
  },
  {
    id: 99,
    category: 'improvement',
    language: 'hi',
    tone: 'constructive',
    template: 'टीम का प्रयास सराहनीय है। और बेहतर अनुभव के लिए [अपनी कोई व्यक्तिगत सलाह लिखें] पर काम किया जा सकता है।'
  },
  {
    id: 100,
    category: 'improvement',
    language: 'hi',
    tone: 'constructive',
    template: '[उत्पाद या सेवा] अच्छी थी, लेकिन यदि प्रबंधन [सुधार योग्य क्षेत्र] पर थोड़ा ध्यान दे तो ग्राहक अनुभव और भी उत्कृष्ट हो जाएगा।'
  }
];

export const OFFICIAL_CONFIG = {
  businessName: 'Girdhar Morari, Mathura',
  businessNameHi: 'गिरधर मुरारी, मथुरा',
  websiteUrl: 'https://girdharmorarimathura.com',
  reviewUrl: 'https://g.page/r/CfcwIoRWwFg7EBM/review',
  locationTagline: 'Guest House near Dwarika dheesh • Hotel near Vishram Ghar • Gujrat Samaj Guest House, Mathura',
  locationTaglineHi: 'द्वारिकाधीश मंदिर के पास गेस्ट हाउस • विश्राम घर के पास होटल • गुजरात समाज गेस्ट हाउस, मथुरा',
  keywords: [
    'Guest House near Dwarika dheesh',
    'hotel near vishram ghar',
    'gujrat samaj guest house',
  ],
};
