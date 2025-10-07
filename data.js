const wordData = [
    // Set 1
    { id: 1, word: "Assign", gujaratiMeaning: "કામ આપવું / સોંપવું", example: "The manager will assign tasks to the team.", exampleGujarati: "મેનેજર ટીમને કામ સોંપશે.", set: 1 },
    { id: 2, word: "Attend", gujaratiMeaning: "હાજર રહેવું", example: "All employees must attend the meeting.", exampleGujarati: "બધા કર્મચારીઓએ બેઠકમાં હાજર રહેવું જોઈએ.", set: 1 },
    { id: 3, word: "Approve", gujaratiMeaning: "મંજૂરી આપવી", example: "The principal approved the new timetable.", exampleGujarati: "આચાર્યશ્રીએ નવો સમયપત્રક મંજૂર કર્યો.", set: 1 },
    { id: 4, word: "Contribute", gujaratiMeaning: "યોગદાન આપવું", example: "Each member will contribute ideas for the project.", exampleGujarati: "દરેક સભ્યએ પ્રોજેક્ટ માટે વિચારોનું યોગદાન આપશે.", set: 1 },
    { id: 5, word: "Discuss", gujaratiMeaning: "ચર્ચા કરવી", example: "We will discuss the report tomorrow.", exampleGujarati: "આપણે રિપોર્ટની ચર્ચા કાલે કરીશું.", set: 1 },

    // Set 2
    { id: 6, word: "Confirm", gujaratiMeaning: "ખાતરી આપવી", example: "Please confirm your attendance for the event.", exampleGujarati: "કૃપા કરીને કાર્યક્રમ માટે તમારી હાજરીની ખાતરી આપો.", set: 2 },
    { id: 7, word: "Inform", gujaratiMeaning: "જાણ કરવી", example: "He informed me about the new rule.", exampleGujarati: "તેણે મને નવા નિયમ વિશે જાણ કરી.", set: 2 },
    { id: 8, word: "Prepare", gujaratiMeaning: "તૈયારી કરવી", example: "She prepared the report before the deadline.", exampleGujarati: "તેણે સમયમર્યાદા પહેલાં રિપોર્ટ તૈયાર કર્યો.", set: 2 },
    { id: 9, word: "Submit", gujaratiMeaning: "સોંપવું", example: "Students must submit their homework on time.", exampleGujarati: "વિદ્યાર્થીઓએ સમયસર હોમવર્ક સોંપવું જોઈએ.", set: 2 },
    { id: 10, word: "Support", gujaratiMeaning: "મદદ કરવી / ટેકો આપવો / સહકાર", example: "The teacher supported the student during the presentation.", exampleGujarati: "શિક્ષકે પ્રેઝન્ટેશન દરમ્યાન વિદ્યાર્થીને સહકાર આપ્યો.", set: 2 },

    // Set 3
    { id: 11, word: "Arrange", gujaratiMeaning: "વ્યવસ્થા કરવી", example: "He arranged the chairs for the meeting.", exampleGujarati: "તેણે બેઠક માટે ખુરશીઓની વ્યવસ્થા કરી.", set: 3 },
    { id: 12, word: "Improve", gujaratiMeaning: "સુધારવું", example: "We need to improve our communication skills.", exampleGujarati: "આપણે સંચાર કુશળતા સુધારવાની જરૂર છે.", set: 3 },
    { id: 13, word: "Provide", gujaratiMeaning: "પૂરો પાડવો", example: "The office will provide lunch for all staff.", exampleGujarati: "ઓફિસ તમામ સ્ટાફને ભોજન પુરૂ પાડશે.", set: 3 },
    { id: 14, word: "Recommend", gujaratiMeaning: "ભલામણ કરવી", example: "The doctor recommended rest for two days.", exampleGujarati: "ડૉક્ટરે બે દિવસ આરામ કરવાની ભલામણ કરી.", set: 3 },
    { id: 15, word: "Report", gujaratiMeaning: "અહેવાલ આપવો", example: "She reported the issue to her supervisor.", exampleGujarati: "તેણીએ સમસ્યા વિશે તેના સુપરવાઇઝરને અહેવાલ આપ્યો.", set: 3 },

    // Set 4
    { id: 16, word: "Arrange", gujaratiMeaning: "ગોઠવવું", example: "He arranged a meeting with the client.", exampleGujarati: "તેણે ક્લાયન્ટ સાથે બેઠક ગોઠવી.", set: 4 },
    { id: 17, word: "Collect", gujaratiMeaning: "એકત્રિત કરવું", example: "The clerk collected the forms from students.", exampleGujarati: "ક્લાર્કે વિદ્યાર્થીઓ પાસેથી ફોર્મ એકત્રિત કર્યા.", set: 4 },
    { id: 18, word: "Deliver", gujaratiMeaning: "પહોંચાડવું", example: "The courier delivered the parcel on time.", exampleGujarati: "કુરિયર પાર્સલ સમયસર પહોંચાડવામાં આવ્યુ.", set: 4 },
    { id: 19, word: "Explain", gujaratiMeaning: "સમજાવવું", example: "The teacher explained the lesson clearly.", exampleGujarati: "શિક્ષકે પાઠ સ્પષ્ટ રીતે સમજાવ્યો.", set: 4 },
    { id: 20, word: "Invite", gujaratiMeaning: "આમંત્રિત કરવું", example: "We invited all parents to the annual function.", exampleGujarati: "અમે તમામ માતા-પિતાને વાર્ષિક કાર્યક્રમ માટે આમંત્રિત કર્યા.", set: 4 },

    // Set 5
    { id: 21, word: "Agree", gujaratiMeaning: "સંમત થવું", example: "They agreed to sign the contract.", exampleGujarati: "તેઓ કરાર પર હસ્તાક્ષર કરવા સંમત થયા.", set: 5 },
    { id: 22, word: "Decide", gujaratiMeaning: "નિર્ણય કરવો", example: "She decided to join the new course.", exampleGujarati: "તેણે નવો કોર્સ જોડાવાનો નિર્ણય કર્યો.", set: 5 },
    { id: 23, word: "Ensure", gujaratiMeaning: "ખાતરી કરવી", example: "Please ensure all documents are ready.", exampleGujarati: "કૃપા કરીને તમામ દસ્તાવેજો તૈયાર છે તેની ખાતરી કરો.", set: 5 },
    { id: 24, word: "Handle", gujaratiMeaning: "સંભાળવું", example: "He handled the situation calmly.", exampleGujarati: "તેણે પરિસ્થિતિને શાંતિથી સંભાળી.", set: 5 },
    { id: 25, word: "Notice", gujaratiMeaning: "ધ્યાન આપવું / નોટિસ કરવું", example: "She noticed the mistake in the report.", exampleGujarati: "તેણે રિપોર્ટમાં ભૂલ પર ધ્યાન આપ્યું.", set: 5 },

    // Set 6
    { id: 26, word: "Arrange", gujaratiMeaning: "ગોઠવવું / વ્યવસ્થા કરવી", example: "He arranged files on the shelf.", exampleGujarati: "તેણે શેલ્ફ પર ફાઈલો ગોઠવી.", set: 6 },
    { id: 27, word: "Approve", gujaratiMeaning: "મંજૂર કરવું", example: "The manager approved the budget plan.", exampleGujarati: "મેનેજરે બજેટ યોજના મંજૂર કરી.", set: 6 },
    { id: 28, word: "Complete", gujaratiMeaning: "પૂર્ણ કરવું", example: "She completed the work before time.", exampleGujarati: "તેણે સમય પહેલાં કામ પૂર્ણ કર્યું.", set: 6 },
    { id: 29, word: "Create", gujaratiMeaning: "બનાવવું", example: "The designer created a new logo.", exampleGujarati: "ડિઝાઇનરે નવું લોગો બનાવ્યો.", set: 6 },
    { id: 30, word: "Suggest", gujaratiMeaning: "સૂચન કરવું", example: "He suggested a better idea.", exampleGujarati: "તેણે એક સારી સલાહ આપી.", set: 6 },

    // Set 7
    { id: 31, word: "Accept", gujaratiMeaning: "સ્વીકારવું", example: "She accepted the invitation.", exampleGujarati: "તેણે આમંત્રણ સ્વીકાર્યું.", set: 7 },
    { id: 32, word: "Arrange", gujaratiMeaning: "ગોઠવવું", example: "They arranged a seminar for students.", exampleGujarati: "તેમણે વિદ્યાર્થીઓ માટે સેમિનાર ગોઠવ્યો.", set: 7 },
    { id: 33, word: "Compare", gujaratiMeaning: "સરખાવવું", example: "We compared two reports for accuracy.", exampleGujarati: "અમે ચોકસાઇ માટે બે રિપોર્ટોની સરખામણી કરી.", set: 7 },
    { id: 34, word: "Inform", gujaratiMeaning: "જાણ કરવી", example: "Please inform me about the changes.", exampleGujarati: "કૃપા કરીને મને ફેરફારો વિશે જાણ કરો.", set: 7 },
    { id: 35, word: "Manage", gujaratiMeaning: "સંચાલન કરવું", example: "He managed the office well.", exampleGujarati: "તેણે ઓફિસનું સારું સંચાલન કર્યું.", set: 7 },

    // Set 8
    { id: 36, word: "Apologize", gujaratiMeaning: "માફી માંગવી", example: "He apologized for his mistake.", exampleGujarati: "તેણે પોતાની ભૂલ માટે માફી માંગી.", set: 8 },
    { id: 37, word: "Clarify", gujaratiMeaning: "સ્પષ્ટ કરવું", example: "She clarified the doubt of the student.", exampleGujarati: "તેણે વિદ્યાર્થીની શંકા દૂર કરી.", set: 8 },
    { id: 38, word: "Describe", gujaratiMeaning: "વર્ણન કરવું", example: "He described the plan in detail.", exampleGujarati: "તેણે યોજનાનું વિગતવાર વર્ણન કર્યું.", set: 8 },
    { id: 39, word: "Organize", gujaratiMeaning: "આયોજન કરવું", example: "They organized a cultural program.", exampleGujarati: "તેમણે સાંસ્કૃતિક કાર્યક્રમનું આયોજન કર્યું.", set: 8 },
    { id: 40, word: "Review", gujaratiMeaning: "સમીક્ષા કરવી", example: "The teacher reviewed the test papers.", exampleGujarati: "શિક્ષકે પરીક્ષા પેપરની સમીક્ષા કરી.", set: 8 },

    // Set 9
    { id: 41, word: "Announce", gujaratiMeaning: "જાહેરાત કરવી", example: "The principal announced the holiday.", exampleGujarati: "પ્રિન્સિપાલે રજાની જાહેરાત કરી.", set: 9 },
    { id: 42, word: "Communicate", gujaratiMeaning: "સંચાર કરવો", example: "Good leaders communicate clearly.", exampleGujarati: "સારા નેતાઓ સ્પષ્ટ રીતે સંવાદ / સંચાર કરે છે.", set: 9 },
    { id: 43, word: "Explain", gujaratiMeaning: "સમજાવવું", example: "He explained the rules to the team.", exampleGujarati: "તેણે ટીમને નિયમો સમજાવ્યા.", set: 9 },
    { id: 44, word: "Participate", gujaratiMeaning: "ભાગ લેવો", example: "Students participated in the competition.", exampleGujarati: "વિદ્યાર્થીઓએ સ્પર્ધામાં ભાગ લીધો.", set: 9 },
    { id: 45, word: "Respond", gujaratiMeaning: "જવાબ આપવો", example: "She responded quickly to the email.", exampleGujarati: "તેણીએ ઈમેલનો ઝડપી જવાબ આપ્યો.", set: 9 },

    // Set 10
    { id: 46, word: "Forward", gujaratiMeaning: "આગળ મોકલવું", example: "Please forward this mail to your team.", exampleGujarati: "કૃપા કરીને આ મેઇલ તમારી ટીમને આગળ મોકલો.", set: 10 },
    { id: 47, word: "Guide", gujaratiMeaning: "માર્ગદર્શન આપવું", example: "The mentor will guide the students.", exampleGujarati: "મેન્ટરે (માર્ગદર્શક) વિદ્યાર્થીઓને માર્ગદર્શન આપશે.", set: 10 },
    { id: 48, word: "Highlight", gujaratiMeaning: "મુખ્ય બતાવવું", example: "The report highlights the key issues.", exampleGujarati: "રિપોર્ટ મુખ્ય મુદ્દાઓ દર્શાવે છે.", set: 10 },
    { id: 49, word: "Implement", gujaratiMeaning: "અમલ કરવો", example: "The school implemented new rules.", exampleGujarati: "શાળાએ નવા નિયમોનો અમલ કર્યો.", set: 10 },
    { id: 50, word: "Instruct", gujaratiMeaning: "સૂચના આપવી", example: "The officer instructed the team to start work.", exampleGujarati: "અધિકારીએ ટીમને કામ શરૂ કરવાની સૂચના આપી.", set: 10 },

    // Set 11
    { id: 51, word: "Supervise", gujaratiMeaning: "દેખરેખ રાખવી", example: "The officer supervises all the staff.", exampleGujarati: "અધિકારી બધા કર્મચારી પર દેખરેખ રાખે છે.", set: 11 },
    { id: 52, word: "Update", gujaratiMeaning: "સુધારો / નવી માહિતી આપવી", example: "Please update the file regularly.", exampleGujarati: "કૃપા કરીને ફાઇલ નિયમિત સુધારો.", set: 11 },
    { id: 53, word: "Verify", gujaratiMeaning: "ચકાસવું", example: "The documents must be verified by the officer.", exampleGujarati: "દસ્તાવેજો અધિકારી દ્વારા ચકાસવા જોઈએ.", set: 11 },
    { id: 54, word: "Balance", gujaratiMeaning: "સંતુલન રાખવું", example: "We must balance work and personal life.", exampleGujarati: "અમારે કામ અને વ્યક્તિગત જીવનમાં સંતુલન રાખવું જોઈએ.", set: 11 },
    { id: 55, word: "Authorize", gujaratiMeaning: "અધિકૃત કરવું", example: "Only the manager can authorize payments.", exampleGujarati: "ફક્ત મેનેજર ચુકવણીઓને અધિકૃત કરી શકે છે.", set: 11 },

    // Set 12
    { id: 56, word: "Cancel", gujaratiMeaning: "રદ કરવું", example: "The event was cancelled due to rain.", exampleGujarati: "વરસાદને કારણે ઇવેન્ટ રદ થઇ.", set: 12 },
    { id: 57, word: "Compile", gujaratiMeaning: "એકત્રિત કરવું", example: "She compiled all the data in one file.", exampleGujarati: "તેણે બધી માહિતી એક જ ફાઇલમાં એકત્રિત કરી.", set: 12 },
    { id: 58, word: "Conduct", gujaratiMeaning: "આયોજન / સંચાલન કરવું", example: "The school conducted an exam last week.", exampleGujarati: "શાળાએ ગયા અઠવાડિયે પરીક્ષા યોજી.", set: 12 },
    { id: 59, word: "Connect", gujaratiMeaning: "જોડાવું", example: "Please connect the laptop to the projector.", exampleGujarati: "કૃપા કરીને લેપટોપને પ્રોજેક્ટર સાથે જોડો.", set: 12 },
    { id: 60, word: "Design", gujaratiMeaning: "ડીઝાઇન કરવી / દોરવું", example: "Teacher designed a square on board.", exampleGujarati: "શિક્ષકે બોર્ડ પર ચોરસ દોર્યુ.", set: 12 },

    // Set 13
    { id: 61, word: "Divide", gujaratiMeaning: "વહેંચવું", example: "The teacher divided the class into groups.", exampleGujarati: "શિક્ષકે ક્લાસને જૂથોમાં વહેંચ્યા.", set: 13, gujaratiPronunciation: "ડિવાઇડ" },
    { id: 62, word: "Focus", gujaratiMeaning: "ધ્યાન કેન્દ્રિત કરવું", example: "Students should focus on studies.", exampleGujarati: "વિદ્યાર્થીઓએ અભ્યાસ પર ધ્યાન કેન્દ્રિત કરવું જોઈએ.", set: 13, gujaratiPronunciation: "ફોકસ" },
    { id: 63, word: "Learn", gujaratiMeaning: "શીખવું", example: "We must learn English.", exampleGujarati: "આપણે અંગ્રેજી શીખવું જ જોઈએ.", set: 13, gujaratiPronunciation: "લર્ન" },
    { id: 64, word: "Expand", gujaratiMeaning: "વિસ્તૃત કરવું", example: "The company wants to expand its business.", exampleGujarati: "કંપની તેનો વ્યવસાય વિસ્તૃત કરવા માગે છે.", set: 13, gujaratiPronunciation: "એક્સપેન્ડ" },
    { id: 65, word: "Lead", gujaratiMeaning: "નેતૃત્વ કરવું", example: "She will lead the new team.", exampleGujarati: "તેણી નવી ટીમનું નેતૃત્વ કરશે.", set: 13, gujaratiPronunciation: "લીડ" },

    // Set 14: Greetings
    { id: 66, word: "Good Morning", gujaratiMeaning: "શુભ સવાર, સુપ્રભાત", example: "Good Morning, Principal sir.", exampleGujarati: "આચાર્યશ્રી સુપ્રભાત.", set: 14, gujaratiPronunciation: "ગુડ મોર્નિંગ" },
    { id: 67, word: "Good Day", gujaratiMeaning: "શુભ દિવસ", example: "Good day, madam.", exampleGujarati: "શુભ દિવસ મેડમ.", set: 14, gujaratiPronunciation: "ગુડ ડે" },
    { id: 68, word: "Good Afternoon", gujaratiMeaning: "શુભ સાંજ! / બપોર", example: "Good afternoon! I hope your day’s been good.", exampleGujarati: "શુભ સાંજ / બપોર આશા છે તમારો દિવસ સારો ગયો.", set: 14, gujaratiPronunciation: "ગુડ આફટરનુન" },
    { id: 69, word: "Good Night", gujaratiMeaning: "શુભ રાત્રી", example: "Good night, see you tomorrow.", exampleGujarati: "શુભ રાત્રી, કાલે મળીએ.", set: 14, gujaratiPronunciation: "ગુડ નાઇટ" },
    { id: 70, word: "Welcome", gujaratiMeaning: "સ્વાગત કરવુ", example: "Welcome to our office.", exampleGujarati: "અમારા ઓફિસમાં આપનું સ્વાગત છે.", set: 14, gujaratiPronunciation: "વેલ કમ" },

    // Set 15
    { id: 71, word: "Divide", gujaratiMeaning: "વહેંચવું", example: "The teacher divided the class into groups.", exampleGujarati: "શિક્ષકે ક્લાસને જૂથોમાં વહેંચ્યો.", set: 15, gujaratiPronunciation: "ડીવાઇડ" },
    { id: 72, word: "Gather", gujaratiMeaning: "ભેગું કરવું", example: "They gathered information from all sources.", exampleGujarati: "તેમણે બધા સ્ત્રોતોમાંથી માહિતી ભેગી કરી.", set: 15, gujaratiPronunciation: "ગેઘર" },
    { id: 73, word: "Ignore", gujaratiMeaning: "અવગણવું", example: "We should not ignore small mistakes.", exampleGujarati: "અમારે નાની ભૂલો અવગણવી નહીં જોઈએ.", set: 15, gujaratiPronunciation: "ઇગ્નોર" },
    { id: 74, word: "Plan", gujaratiMeaning: "યોજના બનાવવી", example: "They planned a trip for next month.", exampleGujarati: "તેમણે આગામી મહિને પ્રવાસની યોજના બનાવી.", set: 15, gujaratiPronunciation: "પ્લાન" },
    { id: 75, word: "Include", gujaratiMeaning: "સામેલ કરવું", example: "The list includes all names.", exampleGujarati: "યાદીમાં બધા નામ સામેલ છે.", set: 15, gujaratiPronunciation: "ઇનક્લુડ" },

    // Set 16
    { id: 76, word: "Obtain", gujaratiMeaning: "મેળવવું", example: "You must obtain permission before entering.", exampleGujarati: "પ્રવેશ કરતા પહેલા તમારે પરવાનગી મેળવવી પડશે.", set: 16, gujaratiPronunciation: "ઓબટેઇન" },
    { id: 77, word: "Open", gujaratiMeaning: "ખોલવું", example: "Please open the file carefully.", exampleGujarati: "કૃપા કરીને ફાઇલ ધ્યાનથી ખોલો.", set: 16, gujaratiPronunciation: "ઓપન" },
    { id: 78, word: "Close", gujaratiMeaning: "બંધ કરવું", example: "Please close the door.", exampleGujarati: "કૃપા કરીને દરવાજો બંધ કરો.", set: 16, gujaratiPronunciation: "ક્લોઝ" },
    { id: 79, word: "Involve", gujaratiMeaning: "સામેલ થવું", example: "All employees are involved in the project.", exampleGujarati: "બધા કર્મચારીઓ પ્રોજેક્ટમાં સામેલ છે.", set: 16, gujaratiPronunciation: "ઇન્વોલ્વ" },
    { id: 80, word: "Perform", gujaratiMeaning: "પ્રદર્શન કરવું", example: "The artist performed well on stage.", exampleGujarati: "કલાકારે મંચ પર સારું પ્રદર્શન કર્યું.", set: 16, gujaratiPronunciation: "પર્ફોર્મ" },

    // Set 17
    { id: 81, word: "Agenda", gujaratiMeaning: "કાર્યક્રમ / ચર્ચાના મુદ્દા", example: "What is the agenda of meeting?", exampleGujarati: "મિટીંગના ચર્ચાના મુદ્દા શું છે?", set: 17, gujaratiPronunciation: "એજન્ડા" },
    { id: 82, word: "Brief", gujaratiMeaning: "ટૂંકું વર્ણન", example: "She gave a brief report on the progress.", exampleGujarati: "તેણીએ પ્રગતિ પર ટૂંકી રિપોર્ટ આપી.", set: 17, gujaratiPronunciation: "બ્રિફ" },
    { id: 83, word: "Draft", gujaratiMeaning: "ડ્રાફ્ટ / રૂપરેખા", example: "He prepared a draft of the letter.", exampleGujarati: "તેણે પત્રનો ડ્રાફ્ટ તૈયાર કર્યો.", set: 17, gujaratiPronunciation: "ડ્રાફ્ટ" },
    { id: 84, word: "Circulate", gujaratiMeaning: "પ્રસાર કરવું / વહેંચવું", example: "The notice was circulated to all staff.", exampleGujarati: "નોટિસ બધાં સ્ટાફમાં વહેંચાઈ હતી.", set: 17, gujaratiPronunciation: "સર્ક્યુલેટ" },
    { id: 85, word: "Share", gujaratiMeaning: "વહેંચવું / રજુ કરવું", example: "Please share your ideas.", exampleGujarati: "કૃપા કરીને તમારા વિચારો રજુ કરો.", set: 17, gujaratiPronunciation: "શેર" },

    // Set 18
    { id: 86, word: "Observe", gujaratiMeaning: "અવલોકન કરવું", example: "Teachers observe the students during exams.", exampleGujarati: "શિક્ષકોએ પરીક્ષા દરમિયાન વિદ્યાર્થીઓનું અવલોકન કરે છે.", set: 18, gujaratiPronunciation: "ઓબસર્વ" },
    { id: 87, word: "Present", gujaratiMeaning: "રજૂ કરવું", example: "He presented his project to the committee.", exampleGujarati: "તેણે કમિટીને પોતાનો પ્રોજેક્ટ રજૂ કર્યો.", set: 18, gujaratiPronunciation: "પ્રેઝન્ટ" },
    { id: 88, word: "Prioritize", gujaratiMeaning: "પ્રાથમિકતા આપવી", example: "We must prioritize important tasks.", exampleGujarati: "આપણે મહત્વપૂર્ણ કાર્યોને પ્રાથમિકતા આપવી જોઈએ.", set: 18, gujaratiPronunciation: "પ્રાઓરીટીઝ" },
    { id: 89, word: "Propose", gujaratiMeaning: "પ્રસ્તાવ મૂકવો", example: "She proposed a new idea.", exampleGujarati: "તેણીએ એક નવો વિચાર પ્રસ્તાવિત કર્યો.", set: 18, gujaratiPronunciation: "પ્રપોસ" },
    { id: 90, word: "Record", gujaratiMeaning: "રેકોર્ડ કરવો / નોંધવું", example: "Please record the video of a dance.", exampleGujarati: "કૃપા કરીને નૃત્યનો વિડીઓ રેકોર્ડ કરો.", set: 18, gujaratiPronunciation: "રેકોર્ડ" },

    // Set 19
    { id: 91, word: "Control", gujaratiMeaning: "નિયંત્રણ રાખવું", example: "The teacher controlled the noisy class.", exampleGujarati: "શિક્ષકે અવાજ કરતો ક્લાસને નિયંત્રિત કર્યો.", set: 19, gujaratiPronunciation: "કન્ટ્રોલ" },
    { id: 92, word: "Courage", gujaratiMeaning: "હિંમત", example: "It takes courage to say sorry.", exampleGujarati: "માફી માંગવા માટે હિંમત જોઈએ.", set: 19, gujaratiPronunciation: "કરેઝ" },
    { id: 93, word: "Engage", gujaratiMeaning: "જોડાવું / વ્યસ્ત રાખવું", example: "The trainer engaged students in activities.", exampleGujarati: "ટ્રેનરે વિદ્યાર્થીઓને પ્રવૃત્તિઓમાં જોડ્યા.", set: 19, gujaratiPronunciation: "એન્ગેજ" },
    { id: 94, word: "Expect", gujaratiMeaning: "અપેક્ષા રાખવી", example: "The teacher expects good results.", exampleGujarati: "શિક્ષક સારા પરિણામોની અપેક્ષા રાખે છે.", set: 19, gujaratiPronunciation: "એક્સપેક્ટ" },
    { id: 95, word: "Refer", gujaratiMeaning: "સંદર્ભ આપવો", example: "Please refer to the attached file.", exampleGujarati: "કૃપા કરીને જોડેલી ફાઇલ જુઓ.", set: 19, gujaratiPronunciation: "રીફર" },

    // Set 20
    { id: 96, word: "Register", gujaratiMeaning: "નોંધણી કરવી", example: "You must register for the event.", exampleGujarati: "તમારે કાર્યક્રમની નોંધણી કરવી પડશે.", set: 20, gujaratiPronunciation: "રજીસ્ટ્રર" },
    { id: 97, word: "Request", gujaratiMeaning: "વિનંતી કરવી", example: "I request your support in this matter.", exampleGujarati: "હું આ બાબતમાં તમારો સહયોગ માગું છું.", set: 20, gujaratiPronunciation: "રીકવેસ્ટ" },
    { id: 98, word: "Schedule", gujaratiMeaning: "સમયપત્રક / કાર્યક્રમ", example: "The school published the exam schedule.", exampleGujarati: "શાળાએ પરીક્ષાનું સમયપત્રક પ્રકાશિત કર્યું.", set: 20, gujaratiPronunciation: "શેડ્યૂલ" },
    { id: 99, word: "Measure", gujaratiMeaning: "માપવું", example: "The engineer measured the length.", exampleGujarati: "એન્જિનિયરે લંબાઈ માપી.", set: 20, gujaratiPronunciation: "મેઝર" },
    { id: 100, word: "Increase", gujaratiMeaning: "વધારો કરવો", example: "The company increased the salary.", exampleGujarati: "કંપનીએ પગારમાં વધારો કર્યો.", set: 20, gujaratiPronunciation: "ઇનક્રીઝ" },

    // Set 21
    { id: 101, word: "Monitor", gujaratiMeaning: "દેખરેખ રાખવી", example: "The principal will monitor the exam.", exampleGujarati: "પ્રિન્સિપાલ પરીક્ષાની દેખરેખ રાખશે.", set: 21, gujaratiPronunciation: "મોનિટર" },
    { id: 102, word: "Motivate", gujaratiMeaning: "પ્રોત્સાહિત કરવું", example: "The coach motivated the players.", exampleGujarati: "કોચે ખેલાડીઓને પ્રોત્સાહિત કર્યા.", set: 21, gujaratiPronunciation: "મોટિવેટ" },
    { id: 103, word: "Outline", gujaratiMeaning: "રૂપરેખા આપવી", example: "He gave an outline of the project.", exampleGujarati: "તેણે પ્રોજેક્ટની રૂપરેખા આપી.", set: 21, gujaratiPronunciation: "આઉટલાઇન" },
    { id: 104, word: "Prevent", gujaratiMeaning: "રોકવું", example: "We must prevent accidents at work.", exampleGujarati: "અમારે કાર્યસ્થળ પર અકસ્માતો રોકવા જોઈએ.", set: 21, gujaratiPronunciation: "પ્રિવેન્ટ" },
    { id: 105, word: "Inspire", gujaratiMeaning: "પ્રેરણા આપવી", example: "The teacher inspired students to work hard.", exampleGujarati: "શિક્ષકે વિદ્યાર્થીઓને મહેનત કરવાની પ્રેરણા આપી.", set: 21, gujaratiPronunciation: "ઇન્સ્પાયર" },

    // Set 22
    { id: 106, word: "Maintain", gujaratiMeaning: "જાળવવું", example: "We must maintain discipline in the office.", exampleGujarati: "અમારે ઓફિસમાં શિસ્ત જાળવવી જોઈએ.", set: 22, gujaratiPronunciation: "મેન્ટેન" },
    { id: 107, word: "Introduce", gujaratiMeaning: "પરિચય કરાવવો", example: "He introduced the guest to the class.", exampleGujarati: "તેણે મહેમાનનો ક્લાસને પરિચય કરાવ્યો.", set: 22, gujaratiPronunciation: "ઈન્ટ્રોડ્યુસ" },
    { id: 108, word: "Nominate", gujaratiMeaning: "પસંદગી કરવી", example: "He was nominated for the award.", exampleGujarati: "તેને એવોર્ડ માટે પસંદ કરવામાં આવ્યો.", set: 22, gujaratiPronunciation: "નોમિનેટ" },
    { id: 109, word: "Justify", gujaratiMeaning: "યોગ્ય ઠેરવવું", example: "You must justify your decision.", exampleGujarati: "તમારે તમારો નિર્ણય યોગ્ય ઠેરવવો પડશે.", set: 22, gujaratiPronunciation: "જસ્ટિફાય" },
    { id: 110, word: "Notify", gujaratiMeaning: "સૂચિત કરવું", example: "Please notify me in advance.", exampleGujarati: "કૃપા કરીને મને પહેલેથી સૂચિત કરો.", set: 22, gujaratiPronunciation: "નોટિફાય" },

    // Set 23
    { id: 111, word: "Identify", gujaratiMeaning: "ઓળખવું", example: "The teacher identified the problems.", exampleGujarati: "શિક્ષકે સમસ્યાઓને ઓળખી.", set: 23, gujaratiPronunciation: "આઈડેન્ટિફાય" },
    { id: 112, word: "Decrease", gujaratiMeaning: "ઘટાડવું, ઓછું કરવું", example: "The temperature will decrease at night.", exampleGujarati: "રાત્રે તાપમાન ઘટશે.", set: 23, gujaratiPronunciation: "ડિક્રીઝ" },
    { id: 113, word: "Overcome", gujaratiMeaning: "પાર પામવું", example: "We must overcome our weaknesses.", exampleGujarati: "અમારે અમારી કમજોરીઓ પર પાર પામવું જોઈએ.", set: 23, gujaratiPronunciation: "ઓવરકમ" },
    { id: 114, word: "Express", gujaratiMeaning: "વ્યક્ત કરવું", example: "She expressed her opinion clearly.", exampleGujarati: "તેણે પોતાની વિચાર સ્પષ્ટ રીતે વ્યક્ત કરી.", set: 23, gujaratiPronunciation: "એક્સપ્રેસ" },
    { id: 115, word: "Facilitate", gujaratiMeaning: "સરળ બનાવવું / સુવિધા આપવી", example: "The officer facilitated the process.", exampleGujarati: "અધિકારીએ પ્રક્રિયા સરળ બનાવી.", set: 23, gujaratiPronunciation: "ફેસિલિટેટ" }
];
