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
    { id: 35, word: "Manage", gujaratiMeaning: "સંચાલન કરવું", example: "He manages the team effectively.", exampleGujarati: "તે ટીમનું અસરકારક સંચાલન કરે છે.", set: 7 },

    // ... (Sets 8–17 omitted for brevity, as they remain unchanged)

    // Set 18
    { id: 86, word: "Observe", gujaratiMeaning: "અવલોકન કરવું", example: "The teacher observes the students.", exampleGujarati: "શિક્ષક વિદ્યાર્થીઓનું અવલોકન કરે છે.", set: 18, gujaratiPronunciation: "ઓબસર્વ" },
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
    { id: 115, word: "Facilitate", gujaratiMeaning: "સરળ બનાવવું / સુવિધા આપવી", example: "The officer facilitated the process.", exampleGujarati: "અધિકારીએ પ્રક્રિયા સરળ બનાવી.", set: 23, gujaratiPronunciation: "ફેસિલિટેટ" },

    // Set 24 (Added on 08-10-2025)
    { id: 116, word: "Execute", gujaratiMeaning: "અમલમાં મૂકવું", example: "The company will execute the plan next week.", exampleGujarati: "કંપની આગામી અઠવાડિયે યોજનાનો અમલ કરશે.", set: 24, gujaratiPronunciation: "એક્ઝિક્યુટ" },
    { id: 117, word: "Feedback", gujaratiMeaning: "પ્રતિસાદ", example: "Please give feedback on the presentation.", exampleGujarati: "કૃપા કરીને પ્રેઝન્ટેશન પર પ્રતિસાદ આપો.", set: 24, gujaratiPronunciation: "ફીડબેક" },
    { id: 118, word: "Efficient", gujaratiMeaning: "કાર્યક્ષમ", example: "She is an efficient worker.", exampleGujarati: "તે કાર્યક્ષમ કામદાર છે.", set: 24, gujaratiPronunciation: "ઇફિશન્ટ" },
    { id: 119, word: "Deadline", gujaratiMeaning: "સમયમર્યાદા", example: "The report must be completed before the deadline.", exampleGujarati: "રિપોર્ટ સમયમર્યાદા પહેલાં પૂર્ણ કરવો જોઈએ.", set: 24, gujaratiPronunciation: "ડેડલાઇન" },
    { id: 120, word: "Coordinate", gujaratiMeaning: "સંકલન કરવું", example: "He will coordinate the event.", exampleGujarati: "તે કાર્યક્રમનું સંકલન કરશે.", set: 24, gujaratiPronunciation: "કોર્ડિનેટ" }

    // Set 25 (Added on 09-10-2025)
    { id: 121, word: "Appraise", gujaratiMeaning: "મૂલ્યાંકન કરવું", example: "The Company will appraise employee performance annually.", exampleGujarati: "કંપની દર વર્ષે કર્મચારીઓની કામગીરીનું મૂલ્યાંકન કરશે.", set: 25, gujaratiPronunciation: "એપ્રેઝ" },
    { id: 122, word: "Audit", gujaratiMeaning: "ઓડિટ કરવું", example: "The finance team will audit the accounts next week.", exampleGujarati: "ફાઇનાન્સ ટીમ આવતા અઠવાડિયે ખાતાઓનું ઓડિટ કરશે.", set: 25, gujaratiPronunciation: "ઓડિટ" },
    { id: 123, word: "Forecast", gujaratiMeaning: "આગાહી કરવી", example: "The manager forecasted next month’s sales trends.", exampleGujarati: "મેનેજરે આવતા મહિને વેચાણની પ્રવૃત્તિની આગાહી કરી.", set: 25, gujaratiPronunciation: "ફોરકાસ્ટ" },
    { id: 124, word: "Formulate", gujaratiMeaning: "તૈયાર કરવું / રચવું", example: "We will formulate a plan to increase productivity.", exampleGujarati: "અમે ઉત્પાદન વધારવા માટે યોજના તૈયાર કરીશું.", set: 25, gujaratiPronunciation: "ફોર્મ્યુલેટ" },
    { id: 125, word: "Benchmark", gujaratiMeaning: "માપદંડ / તુલનાત્મક ધોરણ", example: "The company set a benchmark for quality standards.", exampleGujarati: "કંપનીએ ગુણવત્તા ધોરણ માટે માપદંડ સેટ કર્યો.", set: 25, gujaratiPronunciation: "બેન્ચમાર્ક" }

];
