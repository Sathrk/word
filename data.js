const wordData = [
    // Set 1 (id 1-5)
    { id: 1, set: 1, word: 'Assign', gujaratiMeaning: 'કામ આપવું / સોંપવું', example: 'The manager will assign tasks to the team.', exampleGujarati: 'મેનેજર ટીમને કામ સોંપશે।' },
    { id: 2, set: 1, word: 'Attend', gujaratiMeaning: 'હાજર રહેવું', example: 'All employees must attend the meeting.', exampleGujarati: 'બધા કર્મચારીઓએ બેઠકમાં હાજર રહેવું જોઈએ।' },
    { id: 3, set: 1, word: 'Approve', gujaratiMeaning: 'મંજૂરી આપવી', example: 'The principal approved the new timetable.', exampleGujarati: 'આચાર્યશ્રીએ નવો સમયપત્રક મંજૂર કર્યો.' },
    { id: 4, set: 1, word: 'Contribute', gujaratiMeaning: 'યોગદાન આપવું', example: 'Each member will contribute ideas for the project.', exampleGujarati: 'દરેક સભ્યએ પ્રોજેક્ટ માટે વિચારોનું યોગદાન આપશે।' },
    { id: 5, set: 1, word: 'Discuss', gujaratiMeaning: 'ચર્ચા કરવી', example: 'We will discuss the report tomorrow.', exampleGujarati: 'આપણે રિપોર્ટની ચર્ચા કાલે કરીશું।' },
    
    // Set 2 (id 6-10)
    { id: 6, set: 2, word: 'Confirm', gujaratiMeaning: 'ખાતરી આપવી', example: 'Please confirm your attendance for the event.', exampleGujarati: 'કૃપા કરીને કાર્યક્રમ માટે તમારી હાજરીની ખાતરી આપો.' },
    { id: 7, set: 2, word: 'Inform', gujaratiMeaning: 'જાણ કરવી', example: 'He informed me about the new rule.', exampleGujarati: 'તેણે મને નવા નિયમ વિશે જાણ કરી.' },
    { id: 8, set: 2, word: 'Prepare', gujaratiMeaning: 'તૈયારી કરવી', example: 'She prepared the report before the deadline.', exampleGujarati: 'તેણે સમયમર્યાદા પહેલાં રિપોર્ટ તૈયાર કર્યો.' },
    { id: 9, set: 2, word: 'Submit', gujaratiMeaning: 'સોંપવું', example: 'Students must submit their homework on time.', exampleGujarati: 'વિદ્યાર્થીઓએ સમયસર હોમવર્ક સોંપવું જોઈએ।' },
    { id: 10, set: 2, word: 'Support', gujaratiMeaning: 'મદદ કરવી / ટેકો આપવો / સહકાર', example: 'The teacher supported the student during the presentation.', exampleGujarati: 'શિક્ષકે પ્રેઝન્ટેશન દરમ્યાન વિદ્યાર્થીને સહકાર આપ્યો.' },
    
    // Set 3 (id 11-15)
    { id: 11, set: 3, word: 'Arrange', gujaratiMeaning: 'વ્યવસ્થા કરવી', example: 'He arranged the chairs for the meeting.', exampleGujarati: 'તેણે બેઠક માટે ખુરશીઓની વ્યવસ્થા કરી.' },
    { id: 12, set: 3, word: 'Improve', gujaratiMeaning: 'સુધારવું', example: 'We need to improve our communication skills.', exampleGujarati: 'આપણે સંચાર કુશળતા સુધારવાની જરૂર છે.' },
    { id: 13, set: 3, word: 'Provide', gujaratiMeaning: 'પૂરો પાડવો', example: 'The office will provide lunch for all staff.', exampleGujarati: 'ઓફિસ તમામ સ્ટાફને ભોજન પુરૂ પાડશે.' },
    { id: 14, set: 3, word: 'Recommend', gujaratiMeaning: 'ભલામણ કરવી', example: 'The doctor recommended rest for two days.', exampleGujarati: 'ડૉક્ટરે બે દિવસ આરામ કરવાની ભલામણ કરી.' },
    { id: 15, set: 3, word: 'Report', gujaratiMeaning: 'અહેવાલ આપવો', example: 'She reported the issue to her supervisor.', exampleGujarati: 'તેણીએ સમસ્યા વિશે તેના સુપરવાઇઝરને અહેવાલ આપ્યો.' },
    
    // Set 4 (id 16-20)
    { id: 16, set: 4, word: 'Arrange', gujaratiMeaning: 'ગોઠવવું', example: 'He arranged a meeting with the client.', exampleGujarati: 'તેણે ક્લાયન્ટ સાથે બેઠક ગોઠવી.' },
    { id: 17, set: 4, word: 'Collect', gujaratiMeaning: 'એકત્રિત કરવું', example: 'The clerk collected the forms from students.', exampleGujarati: 'ક્લાર્કે વિદ્યાર્થીઓ પાસેથી ફોર્મ એકત્રિત કર્યા.' },
    { id: 18, set: 4, word: 'Deliver', gujaratiMeaning: 'પહોંચાડવું', example: 'The courier delivered the parcel on time.', exampleGujarati: 'કુરિયર પાર્સલ સમયસર પહોંચાડવામાં આવ્યુ.' },
    { id: 19, set: 4, word: 'Explain', gujaratiMeaning: 'સમજાવવું', example: 'The teacher explained the lesson clearly.', exampleGujarati: 'શિક્ષકે પાઠ સ્પષ્ટ રીતે સમજાવ્યો.' },
    { id: 20, set: 4, word: 'Invite', gujaratiMeaning: 'આમંત્રિત કરવું', example: 'We invited all parents to the annual function.', exampleGujarati: 'અમે તમામ માતા-પિતાને વાર્ષિક કાર્યક્રમ માટે આમંત્રિત કર્યા.' },
    
    // Set 5 (id 21-25)
    { id: 21, set: 5, word: 'Agree', gujaratiMeaning: 'સંમત થવું', example: 'They agreed to sign the contract.', exampleGujarati: 'તેઓ કરાર પર હસ્તાક્ષર કરવા સંમત થયા.' },
    { id: 22, set: 5, word: 'Decide', gujaratiMeaning: 'નિર્ણય કરવો', example: 'She decided to join the new course.', exampleGujarati: 'તેણે નવો કોર્સ જોડાવાનો નિર્ણય કર્યો.' },
    { id: 23, set: 5, word: 'Ensure', gujaratiMeaning: 'ખાતરી કરવી', example: 'Please ensure all documents are ready.', exampleGujarati: 'કૃપા કરીને તમામ દસ્તાવેજો તૈયાર છે તેની ખાતરી કરો.' },
    { id: 24, set: 5, word: 'Handle', gujaratiMeaning: 'સંભાળવું', example: 'He handled the situation calmly.', exampleGujarati: 'તેણે પરિસ્થિતિને શાંતિથી સંભાળી.' },
    { id: 25, set: 5, word: 'Notice', gujaratiMeaning: 'ધ્યાન આપવું / નોટિસ કરવું', example: 'She noticed the mistake in the report.', exampleGujarati: 'તેણે રિપોર્ટમાં ભૂલ પર ધ્યાન આપ્યું.' },
    
    // Set 6 (id 26-30)
    { id: 26, set: 6, word: 'Arrange', gujaratiMeaning: 'ગોઠવવું / વ્યવસ્થા કરવી', example: 'He arranged files on the shelf.', exampleGujarati: 'તેણે શેલ્ફ પર ફાઈલો ગોઠવી.' },
    { id: 27, set: 6, word: 'Approve', gujaratiMeaning: 'મંજૂર કરવું', example: 'The manager approved the budget plan.', exampleGujarati: 'મેનેજરે બજેટ યોજના મંજૂર કરી.' },
    { id: 28, set: 6, word: 'Complete', gujaratiMeaning: 'પૂર્ણ કરવું', example: 'She completed the work before time.', exampleGujarati: 'તેણે સમય પહેલાં કામ પૂર્ણ કર્યું.' },
    { id: 29, set: 6, word: 'Create', gujaratiMeaning: 'બનાવવું', example: 'The designer created a new logo.', exampleGujarati: 'ડિઝાઇનરે નવું લોગો બનાવ્યો.' },
    { id: 30, set: 6, word: 'Suggest', gujaratiMeaning: 'સૂચન કરવું', example: 'He suggested a better idea.', exampleGujarati: 'તેણે એક સારી સલાહ આપી.' },
    
    // Set 7 (id 31-35)
    { id: 31, set: 7, word: 'Accept', gujaratiMeaning: 'સ્વીકારવું', example: 'She accepted the invitation.', exampleGujarati: 'તેણે આમંત્રણ સ્વીકાર્યું.' },
    { id: 32, set: 7, word: 'Arrange', gujaratiMeaning: 'ગોઠવવું', example: 'They arranged a seminar for students.', exampleGujarati: 'તેમણે વિદ્યાર્થીઓ માટે સેમિનાર ગોઠવ્યો.' },
    { id: 33, set: 7, word: 'Compare', gujaratiMeaning: 'સરખાવવું', example: 'We compared two reports for accuracy.', exampleGujarati: 'અમે ચોકસાઇ માટે બે રિપોર્ટોની સરખામણી કરી.' },
    { id: 34, set: 7, word: 'Inform', gujaratiMeaning: 'જાણ કરવી', example: 'Please inform me about the changes.', exampleGujarati: 'કૃપા કરીને મને ફેરફારો વિશે જાણ કરો.' },
    { id: 35, set: 7, word: 'Manage', gujaratiMeaning: 'સંચાલન કરવું', example: 'He managed the office well.', exampleGujarati: 'તેણે ઓફિસનું સારું સંચાલન કર્યું.' },
    
    // Set 8 (id 36-40)
    { id: 36, set: 8, word: 'Apologize', gujaratiMeaning: 'માફી માંગવી', example: 'He apologized for his mistake.', exampleGujarati: 'તેણે પોતાની ભૂલ માટે માફી માંગી.' },
    { id: 37, set: 8, word: 'Clarify', gujaratiMeaning: 'સ્પષ્ટ કરવું', example: 'She clarified the doubt of the student.', exampleGujarati: 'તેણે વિદ્યાર્થીની શંકા દૂર કરી.' },
    { id: 38, set: 8, word: 'Describe', gujaratiMeaning: 'વર્ણન કરવું', example: 'He described the plan in detail.', exampleGujarati: 'તેણે યોજનાનું વિગતવાર વર્ણન કર્યું.' },
    { id: 39, set: 8, word: 'Organize', gujaratiMeaning: 'આયોજન કરવું', example: 'They organized a cultural program.', exampleGujarati: 'તેમણે સાંસ્કૃતિક કાર્યક્રમનું આયોજન કર્યું.' },
    { id: 40, set: 8, word: 'Review', gujaratiMeaning: 'સમીક્ષા કરવી', example: 'The teacher reviewed the test papers.', exampleGujarati: 'શિક્ષકે પરીક્ષા પેપરની સમીક્ષા કરી.' },
    
    // Set 9 (id 41-45)
    { id: 41, set: 9, word: 'Announce', gujaratiMeaning: 'જાહેરાત કરવી', example: 'The principal announced the holiday.', exampleGujarati: 'પ્રિન્સિપાલે રજાની જાહેરાત કરી.' },
    { id: 42, set: 9, word: 'Communicate', gujaratiMeaning: 'સંચાર કરવો', example: 'Good leaders communicate clearly.', exampleGujarati: 'સારા નેતાઓ સ્પષ્ટ રીતે સંવાદ /સંચાર કરે છે.' },
    { id: 43, set: 9, word: 'Explain', gujaratiMeaning: 'સમજાવવું', example: 'He explained the rules to the team.', exampleGujarati: 'તેણે ટીમને નિયમો સમજાવ્યા.' },
    { id: 44, set: 9, word: 'Participate', gujaratiMeaning: 'ભાગ લેવો', example: 'Students participated in the competition.', exampleGujarati: 'વિદ્યાર્થીઓએ સ્પર્ધામાં ભાગ લીધો.' },
    { id: 45, set: 9, word: 'Respond', gujaratiMeaning: 'જવાબ આપવો', example: 'She responded quickly to the email.', exampleGujarati: 'તેણીએ ઈમેલનો ઝડપી જવાબ આપ્યો.' },
    
    // Set 10 (id 46-50)
    { id: 46, set: 10, word: 'Forward', gujaratiMeaning: 'આગળ મોકલવું', example: 'Please forward this mail to your team.', exampleGujarati: 'કૃપા કરીને આ મેઇલ તમારી ટીમને આગળ મોકલો.' },
    { id: 47, set: 10, word: 'Guide', gujaratiMeaning: 'માર્ગદર્શન આપવું', example: 'The mentor will guide the students.', exampleGujarati: 'મેન્ટરે ( માર્ગદર્શક) વિદ્યાર્થીઓને માર્ગદર્શન આપશે.' },
    { id: 48, set: 10, word: 'Highlight', gujaratiMeaning: 'મુખ્ય બતાવવું', example: 'The report highlights the key issues.', exampleGujarati: 'રિપોર્ટ મુખ્ય મુદ્દાઓ દર્શાવે છે.' },
    { id: 49, set: 10, word: 'Implement', gujaratiMeaning: 'અમલ કરવો', example: 'The school implemented new rules.', exampleGujarati: 'શાળાએ નવા નિયમોનો અમલ કર્યો.' },
    { id: 50, set: 10, word: 'Instruct', gujaratiMeaning: 'સૂચના આપવી', example: 'The officer instructed the team to start work.', exampleGujarati: 'અધિકારીએ ટીમને કામ શરૂ કરવાની સૂચના આપી.' },
    
    // Set 11 (id 51-55)
    { id: 51, set: 11, word: 'Supervise', gujaratiMeaning: 'દેખરેખ રાખવી', example: 'The officer supervises all the staff.', exampleGujarati: 'અધિકારી બધા ક્રર્મચારી પર દેખરેખ રાખે છે।' },
    { id: 52, set: 11, word: 'Update', gujaratiMeaning: 'સુધારો / નવી માહિતી આપવી', example: 'Please update the file regularly.', exampleGujarati: 'કૃપા કરીને ફાઇલ નિયમિત સુધારો।' },
    { id: 53, set: 11, word: 'Verify', gujaratiMeaning: 'ચકાસવું', example: 'The documents must be verified by the officer.', exampleGujarati: 'દસ્તાવેજો અધિકારી દ્વારા ચકાસવા જોઈએ।' },
    { id: 54, set: 11, word: 'Balance', gujaratiMeaning: 'સંતુલન રાખવું', example: 'We must balance work and personal life.', exampleGujarati: 'અમારે કામ અને વ્યક્તિગત જીવનમાં સંતુલન રાખવું જોઈએ।' },
    { id: 55, set: 11, word: 'Authorize', gujaratiMeaning: 'અધિકૃત કરવું', example: 'Only the manager can authorize payments.', exampleGujarati: 'ફક્ત મેનેજર ચુકવણીઓને અધિકૃત કરી શકે છે।' },
    
    // Set 12 (id 56-60)
    { id: 56, set: 12, word: 'Cancel', gujaratiMeaning: 'રદ કરવું', example: 'The event was cancelled due to rain.', exampleGujarati: 'વરસાદને કારણે ઇવેન્ટ રદ થઇ।' },
    { id: 57, set: 12, word: 'Compile', gujaratiMeaning: 'એકત્રિત કરવું', example: 'She compiled all the data in one file.', exampleGujarati: 'તેણે બધી માહિતી એક જ ફાઇલમાં એકત્રિત કરી.' },
    { id: 58, set: 12, word: 'Conduct', gujaratiMeaning: 'આયોજન / સંચાલન કરવું', example: 'The school conducted an exam last week.', exampleGujarati: 'શાળાએ ગયા અઠવાડિયે પરીક્ષા યોજી।' },
    { id: 59, set: 12, word: 'Connect', gujaratiMeaning: 'જોડાવું', example: 'Please connect the laptop to the projector.', exampleGujarati: 'કૃપા કરીને લેપટોપને પ્રોજેક્ટર સાથે જોડો.' },
    { id: 60, set: 12, word: 'Design', gujaratiMeaning: 'ડીઝાઇન કરવી / દોરવું', example: 'Teacher designed a square on board.', exampleGujarati: 'શિક્ષકે બોર્ડ પર ચોરસ દોર્યુ.' },
    
    // Set 13 (id 61-65) - First set with explicit pronunciation
    { id: 61, set: 13, word: 'Divide', gujaratiPronunciation: 'ડિવાઇડ', gujaratiMeaning: 'વહેંચવું', example: 'The teacher divided the class into groups.', exampleGujarati: 'શિક્ષકે ક્લાસને જૂથોમાં વહેંચ્યા' },
    { id: 62, set: 13, word: 'Focus', gujaratiPronunciation: 'ફોકસ', gujaratiMeaning: 'ધ્યાન કેન્દ્રિત કરવું', example: 'Students should focus on studies.', exampleGujarati: 'વિદ્યાર્થીઓએ અભ્યાસ પર ધ્યાન કેન્દ્રિત કરવું જોઈએ।' },
    { id: 63, set: 13, word: 'Learn', gujaratiPronunciation: 'લર્ન', gujaratiMeaning: 'શીખવું', example: 'We must learn English.', exampleGujarati: 'આપણે અંગ્રેજી શીખવું જ જોઈએ।' },
    { id: 64, set: 13, word: 'Expand', gujaratiPronunciation: 'એક્સપેન્ડ', gujaratiMeaning: 'વિસ્તૃત કરવું', example: 'The company wants to expand its business.', exampleGujarati: 'કંપની તેનો વ્યવસાય વિસ્તૃત કરવા માગે છે।' },
    { id: 65, set: 13, word: 'Lead', gujaratiPronunciation: 'લીડ', gujaratiMeaning: 'નેતૃત્વ કરવું', example: 'She will lead the new team.', exampleGujarati: 'તેણી નવી ટીમનું નેતૃત્વ કરશે।' },
    
    // Set 14: Greeting Words (id 66-70)
    { id: 66, set: 14, word: 'Good Morning', gujaratiPronunciation: 'ગુડ મોર્નિંગ', gujaratiMeaning: 'શુભ સવાર, સુપ્રભાત', example: 'Good Morning, Principal sir.', exampleGujarati: 'આચાર્યશ્રી સુપ્રભાત' },
    { id: 67, set: 14, word: 'Good Day', gujaratiPronunciation: 'ગુડ ડે', gujaratiMeaning: 'શુભ દિવસ', example: 'Good day, madam.', exampleGujarati: 'શુભ દિવસ મેડમ' },
    { id: 68, set: 14, word: 'Good Afternoon', gujaratiPronunciation: 'ગુડ આફટરનુન', gujaratiMeaning: 'શુભ સાંજ! / બપોર', example: 'Good afternoon! I hope your day’s been good.', exampleGujarati: 'શુભ સાંજ / બપોર આશા છે તમારો દિવસ સારો ગયો.' },
    { id: 69, set: 14, word: 'Good Night', gujaratiPronunciation: 'ગુડ નાઇટ', gujaratiMeaning: 'શુભ રાત્રી', example: 'Good night, see you tomorrow.', exampleGujarati: 'શુભ રાત્રી, કાલે મળીએ.' },
    { id: 70, set: 14, word: 'Welcome', gujaratiPronunciation: 'વેલ કમ', gujaratiMeaning: 'સ્વાગત કરવુ', example: 'Welcome to our office.', exampleGujarati: 'અમારા ઓફિસમાં આપનું સ્વાગત છે.' },
    
    // Set 15 (id 71-75)
    { id: 71, set: 15, word: 'Divide', gujaratiPronunciation: 'ડીવાઇડ', gujaratiMeaning: 'વહેંચવું', example: 'The teacher divided the class into groups.', exampleGujarati: 'શિક્ષકે ક્લાસને જૂથોમાં વહેંચ્યો।' },
    { id: 72, set: 15, word: 'Gather', gujaratiPronunciation: 'ગેઘર', gujaratiMeaning: 'ભેગું કરવું', example: 'They gathered information from all sources.', exampleGujarati: 'તેમણે બધા સ્ત્રોતોમાંથી માહિતી ભેગી કરી.' },
    { id: 73, set: 15, word: 'Ignore', gujaratiPronunciation: 'ઇગ્નોર', gujaratiMeaning: 'અવગણવું', example: 'We should not ignore small mistakes.', exampleGujarati: 'અમારે નાની ભૂલો અવગણવી નહીં જોઈએ।' },
    { id: 74, set: 15, word: 'Plan', gujaratiPronunciation: 'પ્લાન', gujaratiMeaning: 'યોજના બનાવવી', example: 'They planned a trip for next month.', exampleGujarati: 'તેમણે આગામી મહિને પ્રવાસની યોજના બનાવી.' },
    { id: 75, set: 15, word: 'Include', gujaratiPronunciation: 'ઇનક્લુડ', gujaratiMeaning: 'સામેલ કરવું', example: 'The list includes all names.', exampleGujarati: 'યાદીમાં બધા નામ સામેલ છે।' },
    
    // Set 16 (id 76-80)
    { id: 76, set: 16, word: 'Obtain', gujaratiPronunciation: 'ઓબટેઇન', gujaratiMeaning: 'મેળવવું', example: 'You must obtain permission before entering.', exampleGujarati: 'પ્રવેશ કરતા પહેલા તમારે પરવાનગી મેળવવી પડશે।' },
    { id: 77, set: 16, word: 'Open', gujaratiPronunciation: 'ઓપન', gujaratiMeaning: 'ખોલવું', example: 'Please open the file carefully.', exampleGujarati: 'કૃપા કરીને ફાઇલ ધ્યાનથી ખોલો।' },
    { id: 78, set: 16, word: 'Close', gujaratiPronunciation: 'ક્લોઝ', gujaratiMeaning: 'બંધ કરવું', example: 'Please close the door.', exampleGujarati: 'કૃપા કરીને દરવાજો બંધ કરો।' },
    { id: 79, set: 16, word: 'Involve', gujaratiPronunciation: 'ઇન્વોલ્વ', gujaratiMeaning: 'સામેલ થવું', example: 'All employees are involved in the project.', exampleGujarati: 'બધા કર્મચારીઓ પ્રોજેક્ટમાં સામેલ છે।' },
    { id: 80, set: 16, word: 'Perform', gujaratiPronunciation: 'પર્ફોર્મ', gujaratiMeaning: 'પ્રદર્શન કરવું', example: 'The artist performed well on stage.', exampleGujarati: 'કલાકારે મંચ પર સારું પ્રદર્શન કર્યું।' },
    
    // Set 17 (id 81-85)
    { id: 81, set: 17, word: 'Agenda', gujaratiPronunciation: 'એજન્ડા', gujaratiMeaning: 'કાર્યક્રમ / ચર્ચાના મુદ્દા', example: 'what is the agenda of meeting ?', exampleGujarati: 'મિટીંગના ચર્ચાના મુદ્દા શુ છે?' },
    { id: 82, set: 17, word: 'Brief', gujaratiPronunciation: 'બ્રિફ', gujaratiMeaning: 'ટૂંકું વર્ણન', example: 'She gave a brief report on the progress.', exampleGujarati: 'તેણીએ પ્રગતિ પર ટૂંકી રિપોર્ટ આપી।' },
    { id: 83, set: 17, word: 'Draft', gujaratiPronunciation: 'ડ્રાફ્ટ', gujaratiMeaning: 'ડ્રાફ્ટ / રૂપરેખા', example: 'He prepared a draft of the letter.', exampleGujarati: 'તેણે પત્રનો ડ્રાફ્ટ તૈયાર કર્યો।' },
    { id: 84, set: 17, word: 'Circulate', gujaratiPronunciation: 'સર્ક્યુલેટ', gujaratiMeaning: 'પ્રસાર કરવું / વહેંચવું', example: 'The notice was circulated to all staff.', exampleGujarati: 'નોટિસ બધાં સ્ટાફમાં વહેંચાઈ હતી।' },
    { id: 85, set: 17, word: 'Share', gujaratiPronunciation: 'શેર', gujaratiMeaning: 'વહેંચવું / રજુ કરવું', example: 'Please share your ideas.', exampleGujarati: 'કૃપા કરીને તમારા વિચારો રજુ કરો।' },
    
    // Set 18 (id 86-90)
    { id: 86, set: 18, word: 'Observe', gujaratiPronunciation: 'ઓબસર્વ', gujaratiMeaning: 'અવલોકન કરવું', example: 'Teachers observe the students during exams.', exampleGujarati: 'શિક્ષકોએ પરીક્ષા દરમિયાન વિદ્યાર્થીઓનું અવલોકન કરે છે।' },
    { id: 87, set: 18, word: 'Present', gujaratiPronunciation: 'પ્રેઝન્ટ', gujaratiMeaning: 'રજૂ કરવું', example: 'He presented his project to the committee.', exampleGujarati: 'તેણે કમિટીને પોતાનો પ્રોજેક્ટ રજૂ કર્યો.' },
    { id: 88, set: 18, word: 'Prioritize', gujaratiPronunciation: 'પ્રાઓરીટીઝ', gujaratiMeaning: 'પ્રાથમિકતા આપવી', example: 'We must prioritize important tasks.', exampleGujarati: 'આપણે મહત્વપૂર્ણ કાર્યોને પ્રાથમિકતા આપવી જોઈએ।' },
    { id: 89, set: 18, word: 'Propose', gujaratiPronunciation: 'પ્રપોસ', gujaratiMeaning: 'પ્રસ્તાવ મૂકવો', example: 'She proposed a new idea.', exampleGujarati: 'તેણીએ એક નવો વિચાર પ્રસ્તાવિત કર્યો.' },
    { id: 90, set: 18, word: 'Record', gujaratiPronunciation: 'રેકોર્ડ', gujaratiMeaning: 'રેકોર્ડ કરવો / નોંધવું', example: 'Please record the video of a dance.', exampleGujarati: 'કૃપા કરીને નૃત્યનો વિડીઓ રેકોર્ડ કરો.' },
,

    // Set 19 (id 91–95)
    { id: 91, set: 19, word: 'Control', gujaratiPronunciation: 'કન્ટ્રોલ', gujaratiMeaning: 'નિયંત્રણ રાખવું', example: 'The teacher controlled the noisy class.', exampleGujarati: 'શિક્ષકે અવાજ કરતો ક્લાસને નિયંત્રિત કર્યો.' },
    { id: 92, set: 19, word: 'Courage', gujaratiPronunciation: 'કરેઝ', gujaratiMeaning: 'હિંમત', example: 'It takes courage to say sorry.', exampleGujarati: 'માફી માંગવા માટે હિંમત જોઈએ.' },
    { id: 93, set: 19, word: 'Engage', gujaratiPronunciation: 'એન્ગેજ', gujaratiMeaning: 'જોડાવું / વ્યસ્ત રાખવું', example: 'The trainer engaged students in activities.', exampleGujarati: 'ટ્રેનરે વિદ્યાર્થીઓને પ્રવૃત્તિઓમાં જોડ્યા.' },
    { id: 94, set: 19, word: 'Expect', gujaratiPronunciation: 'એક્સપેક્ટ', gujaratiMeaning: 'અપેક્ષા રાખવી', example: 'The teacher expects good results.', exampleGujarati: 'શિક્ષક સારા પરિણામોની અપેક્ષા રાખે છે.' },
    { id: 95, set: 19, word: 'Refer', gujaratiPronunciation: 'રીફર', gujaratiMeaning: 'સંદર્ભ આપવો', example: 'Please refer to the attached file.', exampleGujarati: 'કૃપા કરીને જોડેલી ફાઇલ જુઓ.' },

    // Set 20 (id 96–100)
    { id: 96, set: 20, word: 'Register', gujaratiPronunciation: 'રજીસ્ટ્રર', gujaratiMeaning: 'નોંધણી કરવી', example: 'You must register for the event.', exampleGujarati: 'તમારે કાર્યક્રમની નોંધણી કરવી પડશે.' },
    { id: 97, set: 20, word: 'Request', gujaratiPronunciation: 'રીકવેસ્ટ', gujaratiMeaning: 'વિનંતી કરવી', example: 'I request your support in this matter.', exampleGujarati: 'હું આ બાબતમાં તમારો સહયોગ માગું છું.' },
    { id: 98, set: 20, word: 'Schedule', gujaratiPronunciation: 'શેડ્યૂલ', gujaratiMeaning: 'સમયપત્રક / કાર્યક્રમ', example: 'The school published the exam schedule.', exampleGujarati: 'શાળાએ પરીક્ષાનું સમયપત્રક પ્રકાશિત કર્યું.' },
    { id: 99, set: 20, word: 'Measure', gujaratiPronunciation: 'મેઝર', gujaratiMeaning: 'માપવું', example: 'The engineer measured the length.', exampleGujarati: 'એન્જિનિયરે લંબાઈ માપી.' },
    { id: 100, set: 20, word: 'Increase', gujaratiPronunciation: 'ઇનક્રીઝ', gujaratiMeaning: 'વધારો કરવો', example: 'The company increased the salary.', exampleGujarati: 'કંપનીએ પગારમાં વધારો કર્યો.' },

    // Set 21 (id 101–105)
    { id: 101, set: 21, word: 'Monitor', gujaratiPronunciation: 'મોનિટર', gujaratiMeaning: 'દેખરેખ રાખવી', example: 'The principal will monitor the exam.', exampleGujarati: 'પ્રિન્સિપાલ પરીક્ષાની દેખરેખ રાખશે.' },
    { id: 102, set: 21, word: 'Motivate', gujaratiPronunciation: 'મોટિવેટ', gujaratiMeaning: 'પ્રોત્સાહિત કરવું', example: 'The coach motivated the players.', exampleGujarati: 'કોચે ખેલાડીઓને પ્રોત્સાહિત કર્યા.' },
    { id: 103, set: 21, word: 'Outline', gujaratiPronunciation: 'આઉટલાઇન', gujaratiMeaning: 'રૂપરેખા આપવી', example: 'He gave an outline of the project.', exampleGujarati: 'તેણે પ્રોજેક્ટની રૂપરેખા આપી.' },
    { id: 104, set: 21, word: 'Prevent', gujaratiPronunciation: 'પ્રિવેન્ટ', gujaratiMeaning: 'રોકવું', example: 'We must prevent accidents at work.', exampleGujarati: 'અમારે કાર્યસ્થળ પર અકસ્માતો રોકવા જોઈએ.' },
    { id: 105, set: 21, word: 'Inspire', gujaratiPronunciation: 'ઇન્સ્પાયર', gujaratiMeaning: 'પ્રેરણા આપવી', example: 'The teacher inspired students to work hard.', exampleGujarati: 'શિક્ષકે વિદ્યાર્થીઓને મહેનત કરવાની પ્રેરણા આપી.' },


    // Set 22 (id 106–110)
    { id: 106, set: 22, word: 'Maintain', gujaratiPronunciation: 'મેન્ટેન', gujaratiMeaning: 'જાળવવું', example: 'We must maintain discipline in the office.', exampleGujarati: 'અમારે ઓફિસમાં શિસ્ત જાળવવી જોઈએ.' },
    { id: 107, set: 22, word: 'Introduce', gujaratiPronunciation: 'ઈન્ટ્રોડ્યુસ', gujaratiMeaning: 'પરિચય કરાવવો', example: 'He introduced the guest to the class.', exampleGujarati: 'તેણે મહેમાનનો ક્લાસને પરિચય કરાવ્યો.' },
    { id: 108, set: 22, word: 'Nominate', gujaratiPronunciation: 'નોમિનેટ', gujaratiMeaning: 'પસંદગી કરવી', example: 'He was nominated for the award.', exampleGujarati: 'તેણે એવોર્ડ માટે પસંદ કરવામાં આવ્યો.' },
    { id: 109, set: 22, word: 'Justify', gujaratiPronunciation: 'જસ્ટિફાય', gujaratiMeaning: 'યોગ્ય ઠેરવવું', example: 'You must justify your decision.', exampleGujarati: 'તમારે તમારો નિર્ણય યોગ્ય ઠેરવવો પડશે.' },
    { id: 110, set: 22, word: 'Notify', gujaratiPronunciation: 'નોટિફાય', gujaratiMeaning: 'સૂચિત કરવું', example: 'Please notify me in advance.', exampleGujarati: 'કૃપા કરીને મને પહેલેથી સૂચિત કરો.' },

];