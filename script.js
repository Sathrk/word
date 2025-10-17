// =================================================================
// --- 1. WORD DATA (from your original code) ---
// =================================================================

const rawWordData = [
    // Set 1 (Words 1-5)
    { id: 1, set: 'Set 1', word: 'Assign', pronunciation_guj: 'કામ આપવું / સોંપવું', example: 'The manager will assign tasks to the team.', example_gujarati: 'મેનેજર ટીમને કામ સોંપશે.', pron: '' },
    { id: 2, set: 'Set 1', word: 'Attend', pronunciation_guj: 'હાજર રહેવું', example: 'All employees must attend the meeting.', example_gujarati: 'બધા કર્મચારીઓએ બેઠકમાં હાજર રહેવું જોઈએ.', pron: '' },
    { id: 3, set: 'Set 1', word: 'Approve', pronunciation_guj: 'મંજૂરી આપવી', example: 'The principal approved the new timetable.', example_gujarati: 'આચાર્યશ્રીએ નવો સમયપત્રક મંજૂર કર્યો.', pron: '' },
    { id: 4, set: 'Set 1', word: 'Contribute', pronunciation_guj: 'યોગદાન આપવું', example: 'Each member will contribute ideas for the project.', example_gujarati: 'દરેક સભ્યએ પ્રોજેક્ટ માટે વિચારોનું યોગદાન આપશે.', pron: '' },
    { id: 5, set: 'Set 1', word: 'Discuss', pronunciation_guj: 'ચર્ચા કરવી', example: 'We will discuss the report tomorrow', example_gujarati: 'આપણે રિપોર્ટની ચર્ચા કાલે કરીશું.', pron: '' },
    // Set 2 (Words 6-10)
    { id: 6, set: 'Set 2', word: 'Confirm', pronunciation_guj: 'ખાતરી આપવી', example: 'Please confirm your attendance for the event.', example_gujarati: 'કૃપા કરીને કાર્યક્રમ માટે તમારી હાજરીની ખાતરી આપો.', pron: '' },
    { id: 7, set: 'Set 2', word: 'Inform', pronunciation_guj: 'જાણ કરવી', example: 'He informed me about the new rule.', example_gujarati: 'તેણે મને નવા નિયમ વિશે જાણ કરી.', pron: '' },
    { id: 8, set: 'Set 2', word: 'Prepare', pronunciation_guj: 'તૈયારી કરવી', example: 'She prepared the report before the deadline.', example_gujarati: 'તેણે સમયમર્યાદા પહેલાં રિપોર્ટ તૈયાર કર્યો.', pron: '' },
    { id: 9, set: 'Set 2', word: 'Submit', pronunciation_guj: 'સોંપવું', example: 'Students must submit their homework on time.', example_gujarati: 'વિદ્યાર્થીઓએ સમયસર હોમવર્ક સોંપવું જોઈએ.', pron: '' },
    { id: 10, set: 'Set 2', word: 'Support', pronunciation_guj: 'મદદ કરવી / ટેકો આપવો / સહકાર', example: 'The teacher supported the student during the presentation.', example_gujarati: 'શિક્ષકે પ્રેઝન્ટેશન દરમ્યાન વિદ્યાર્થીને સહકાર આપ્યો.', pron: '' },
    // Set 3 (Words 11-15)
    { id: 11, set: 'Set 3', word: 'Arrange', pronunciation_guj: 'વ્યવસ્થા કરવી', example: 'He arranged the chairs for the meeting.', example_gujarati: 'તેણે બેઠક માટે ખુરશીઓની વ્યવસ્થા કરી.', pron: '' },
    { id: 12, set: 'Set 3', word: 'Improve', pronunciation_guj: 'સુધારવું', example: 'We need to improve our communication skills.', example_gujarati: 'આપણે સંચાર કુશળતા સુધારવાની જરૂર છે.', pron: '' },
    { id: 13, set: 'Set 3', word: 'Provide', pronunciation_guj: 'પૂરો પાડવો', example: 'The office will provide lunch for all staff.', example_gujarati: 'ઓફિસ તમામ સ્ટાફને ભોજન પુરૂ પાડશે.', pron: '' },
    { id: 14, set: 'Set 3', word: 'Recommend', pronunciation_guj: 'ભલામણ કરવી', example: 'The doctor recommended rest for two days.', example_gujarati: 'ડૉક્ટરે બે દિવસ આરામ કરવાની ભલામણ કરી.', pron: '' },
    { id: 15, set: 'Set 3', word: 'Report', pronunciation_guj: 'અહેવાલ આપવો', example: 'She reported the issue to her supervisor.', example_gujarati: 'તેણીએ સમસ્યા વિશે તેના સુપરવાઇઝરને અહેવાલ આપ્યો.', pron: '' },
    // Set 4 (Words 16-20)
    { id: 16, set: 'Set 4', word: 'Arrange', pronunciation_guj: 'ગોઠવવું', example: 'He arranged a meeting with the client.', example_gujarati: 'તેણે ક્લાયન્ટ સાથે બેઠક ગોઠવી.', pron: '' },
    { id: 17, set: 'Set 4', word: 'Collect', pronunciation_guj: 'એકત્રિત કરવું', example: 'The clerk collected the forms from students.', example_gujarati: 'ક્લાર્કે વિદ્યાર્થીઓ પાસેથી ફોર્મ એકત્રિત કર્યા.', pron: '' },
    { id: 18, set: 'Set 4', word: 'Deliver', pronunciation_guj: 'પહોંચાડવું', example: 'The courier delivered the parcel on time.', example_gujarati: 'કુરિયર પાર્સલ સમયસર પહોંચાડવામાં આવ્યુ', pron: '' },
    { id: 19, set: 'Set 4', word: 'Explain', pronunciation_guj: 'સમજાવવું', example: 'The teacher explained the lesson clearly.', example_gujarati: 'શિક્ષકે પાઠ સ્પષ્ટ રીતે સમજાવ્યો.', pron: '' },
    { id: 20, set: 'Set 4', word: 'Invite', pronunciation_guj: 'આમંત્રિત કરવું', example: 'We invited all parents to the annual function.', example_gujarati: 'અમે તમામ માતા-પિતાને વાર્ષિક કાર્યક્રમ માટે આમંત્રિત કર્યા', pron: '' },
    // Set 5 (Words 21-25)
    { id: 21, set: 'Set 5', word: 'Agree', pronunciation_guj: 'સંમત થવું', example: 'They agreed to sign the contract.', example_gujarati: 'તેઓ કરાર પર હસ્તાક્ષર કરવા સંમત થયા.', pron: '' },
    { id: 22, set: 'Set 5', word: 'Decide', pronunciation_guj: 'નિર્ણય કરવો', example: 'She decided to join the new course.', example_gujarati: 'તેણે નવો કોર્સ જોડાવાનો નિર્ણય કર્યો.', pron: '' },
    { id: 23, set: 'Set 5', word: 'Ensure', pronunciation_guj: 'ખાતરી કરવી', example: 'Please ensure all documents are ready.', example_gujarati: 'કૃપા કરીને તમામ દસ્તાવેજો તૈયાર છે તેની ખાતરી કરો.', pron: '' },
    { id: 24, set: 'Set 5', word: 'Handle', pronunciation_guj: 'સંભાળવું', example: 'He handled the situation calmly.', example_gujarati: 'તેણે પરિસ્થિતિને શાંતિથી સંભાળી.', pron: '' },
    { id: 25, set: 'Set 5', word: 'Notice', pronunciation_guj: 'ધ્યાન આપવું / નોટિસ કરવું', example: 'She noticed the mistake in the report.', example_gujarati: 'તેણે રિપોર્ટમાં ભૂલ પર ધ્યાન આપ્યું', pron: '' },
    // Set 6 (Words 26-30)
    { id: 26, set: 'Set 6', word: 'Arrange', pronunciation_guj: 'ગોઠવવું / વ્યવસ્થા કરવી', example: 'He arranged files on the shelf.', example_gujarati: 'તેણે શેલ્ફ પર ફાઈલો ગોઠવી.', pron: '' },
    { id: 27, set: 'Set 6', word: 'Approve', pronunciation_guj: 'મંજૂર કરવું', example: 'The manager approved the budget plan.', example_gujarati: 'મેનેજરે બજેટ યોજના મંજૂર કરી.', pron: '' },
    { id: 28, set: 'Set 6', word: 'Complete', pronunciation_guj: 'પૂર્ણ કરવું', example: 'She completed the work before time.', example_gujarati: 'તેણે સમય પહેલાં કામ પૂર્ણ કર્યું.', pron: '' },
    { id: 29, set: 'Set 6', word: 'Create', pronunciation_guj: 'બનાવવું', example: 'The designer created a new logo.', example_gujarati: 'ડિઝાઇનરે નવું લોગો બનાવ્યો', pron: '' },
    { id: 30, set: 'Set 6', word: 'Suggest', pronunciation_guj: 'સૂચન કરવું', example: 'He suggested a better idea.', example_gujarati: 'તેણે એક સારી સલાહ આપી.', pron: '' },
    // Set 7 (Words 31-35)
    { id: 31, set: 'Set 7', word: 'Accept', pronunciation_guj: 'સ્વીકારવું', example: 'She accepted the invitation.', example_gujarati: 'તેણે આમંત્રણ સ્વીકાર્યું.', pron: '' },
    { id: 32, set: 'Set 7', word: 'Arrange', pronunciation_guj: 'ગોઠવવું', example: 'They arranged a seminar for students.', example_gujarati: 'તેમણે વિદ્યાર્થીઓ માટે સેમિનાર ગોઠવ્યો.', pron: '' },
    { id: 33, set: 'Set 7', word: 'Compare', pronunciation_guj: 'સરખાવવું', example: 'We compared two reports for accuracy.', example_gujarati: 'અમે ચોકસાઇ માટે બે રિપોર્ટોની સરખામણી કરી.', pron: '' },
    { id: 34, set: 'Set 7', word: 'Inform', pronunciation_guj: 'જાણ કરવી', example: 'Please inform me about the changes.', example_gujarati: 'કૃપા કરીને મને ફેરફારો વિશે જાણ કરો.', pron: '' },
    { id: 35, set: 'Set 7', word: 'Manage', pronunciation_guj: 'સંચાલન કરવું', example: 'He managed the office well.', example_gujarati: 'તેણે ઓફિસનું સારું સંચાલન કર્યું.', pron: '' },
    // Set 8 (Words 36-40)
    { id: 36, set: 'Set 8', word: 'Apologize', pronunciation_guj: 'માફી માંગવી', example: 'He apologized for his mistake.', example_gujarati: 'તેણે પોતાની ભૂલ માટે માફી માંગી.', pron: '' },
    { id: 37, set: 'Set 8', word: 'Clarify', pronunciation_guj: 'સ્પષ્ટ કરવું', example: 'She clarified the doubt of the student.', example_gujarati: 'તેણે વિદ્યાર્થીની શંકા દૂર કરી.', pron: '' },
    { id: 38, set: 'Set 8', word: 'Describe', pronunciation_guj: 'વર્ણન કરવું', example: 'He described the plan in detail.', example_gujarati: 'તેણે યોજનાનું વિગતવાર વર્ણન કર્યું.', pron: '' },
    { id: 39, set: 'Set 8', word: 'Organize', pronunciation_guj: 'આયોજન કરવું', example: 'They organized a cultural program.', example_gujarati: 'તેમણે સાંસ્કૃતિક કાર્યક્રમનું આયોજન કર્યું.', pron: '' },
    { id: 40, set: 'Set 8', word: 'Review', pronunciation_guj: 'સમીક્ષા કરવી', example: 'The teacher reviewed the test papers.', example_gujarati: 'શિક્ષકે પરીક્ષા પેપરની સમીક્ષા કરી.', pron: '' },
    // Set 9 (Words 41-45)
    { id: 41, set: 'Set 9', word: 'Announce', pronunciation_guj: 'જાહેરાત કરવી', example: 'The principal announced the holiday.', example_gujarati: 'પ્રિન્સિપાલે રજાની જાહેરાત કરી.', pron: '' },
    { id: 42, set: 'Set 9', word: 'Communicate', pronunciation_guj: 'સંચાર કરવો', example: 'Good leaders communicate clearly.', example_gujarati: 'સારા નેતાઓ સ્પષ્ટ રીતે સંવાદ /સંચાર કરે છે.', pron: '' },
    { id: 43, set: 'Set 9', word: 'Explain', pronunciation_guj: 'સમજાવવું', example: 'He explained the rules to the team.', example_gujarati: 'તેણે ટીમને નિયમો સમજાવ્યા.', pron: '' },
    { id: 44, set: 'Set 9', word: 'Participate', pronunciation_guj: 'ભાગ લેવો', example: 'Students participated in the competition.', example_gujarati: 'વિદ્યાર્થીઓએ સ્પર્ધામાં ભાગ લીધો', pron: '' },
    { id: 45, set: 'Set 9', word: 'Respond', pronunciation_guj: 'જવાબ આપવો', example: 'She responded quickly to the email.', example_gujarati: 'તેણીએ ઈમેલનો ઝડપી જવાબ આપ્યો', pron: '' },
    // Set 10 (Words 46-50)
    { id: 46, set: 'Set 10', word: 'Forward', pronunciation_guj: 'આગળ મોકલવું', example: 'Please forward this mail to your team', example_gujarati: 'કૃપા કરીને આ મેઇલ તમારી ટીમને આગળ મોકલો', pron: '' },
    { id: 47, set: 'Set 10', word: 'Guide', pronunciation_guj: 'માર્ગદર્શન આપવું', example: 'The mentor will guide the students', example_gujarati: 'મેન્ટરે ( માર્ગદર્શક) વિદ્યાર્થીઓને માર્ગદર્શન આપશે', pron: '' },
    { id: 48, set: 'Set 10', word: 'Highlight', pronunciation_guj: 'મુખ્ય બતાવવું', example: 'The report highlights the key issues.', example_gujarati: 'રિપોર્ટ મુખ્ય મુદ્દાઓ દર્શાવે છે.', pron: '' },
    { id: 49, set: 'Set 10', word: 'Implement', pronunciation_guj: 'અમલ કરવો', example: 'The school implemented new rules', example_gujarati: 'શાળાએ નવા નિયમોનો અમલ કર્યો.', pron: '' },
    { id: 50, set: 'Set 10', word: 'Instruct', pronunciation_guj: 'સૂચના આપવી', example: 'The officer instructed the team to start work', example_gujarati: 'અધિકારીએ ટીમને કામ શરૂ કરવાની સૂચના આપી.', pron: '' },
    // Set 11 (Words 51-55)
    { id: 51, set: 'Set 11', word: 'Supervise', pronunciation_guj: 'દેખરેખ રાખવી', example: 'The officer supervises all the staff.', example_gujarati: 'અધિકારી બધા ક્રર્મચારી પર દેખરેખ રાખે છે.', pron: 'મોનિટર' },
    { id: 52, set: 'Set 11', word: 'Update', pronunciation_guj: 'સુધારો / નવી માહિતી આપવી', example: 'Please update the file regularly..', example_gujarati: 'કૃપા કરીને ફાઇલ નિયમિત સુધારો.', pron: '' },
    { id: 53, set: 'Set 11', word: 'Verify', pronunciation_guj: 'ચકાસવું', example: 'The documents must be verified by the officer.', example_gujarati: 'દસ્તાવેજો અધિકારી દ્વારા ચકાસવા જોઈએ.', pron: '' },
    { id: 54, set: 'Set 11', word: 'Balance', pronunciation_guj: 'સંતુલન રાખવું', example: 'We must balance work and personal life.', example_gujarati: 'અમારે કામ અને વ્યક્તિગત જીવનમાં સંતુલન રાખવું જોઈએ..', pron: '' },
    { id: 55, set: 'Set 11', word: 'Authorize', pronunciation_guj: 'અધિકૃત કરવું', example: 'Only the manager can authorize payments.', example_gujarati: 'ફક્ત મેનેજર ચુકવણીઓને અધિકૃત કરી શકે છે.', pron: '' },
    // Set 12 (Words 56-60)
    { id: 56, set: 'Set 12', word: 'Cancel', pronunciation_guj: 'રદ કરવું', example: 'The event was cancelled due to rain.', example_gujarati: 'વરસાદને કારણે ઇવેન્ટ રદ થઇ.', pron: '' },
    { id: 57, set: 'Set 12', word: 'Compile', pronunciation_guj: 'એકત્રિત કરવું', example: 'She compiled all the data in one file.', example_gujarati: 'તેણે બધી માહિતી એક જ ફાઇલમાં એકત્રિત કરી.', pron: '' },
    { id: 58, set: 'Set 12', word: 'Conduct', pronunciation_guj: 'આયોજન / સંચાલન કરવું', example: 'The school conducted an exam last week.', example_gujarati: 'શાળાએ ગયા અઠવાડિયે પરીક્ષા યોજી.', pron: '' },
    { id: 59, set: 'Set 12', word: 'Connect', pronunciation_guj: 'જોડાવું', example: 'Please connect the laptop to the projector..', example_gujarati: 'કૃપા કરીને લેપટોપને પ્રોજેક્ટર સાથે જોડો.', pron: '' },
    { id: 60, set: 'Set 12', word: 'Design', pronunciation_guj: 'ડીઝાઇન કરવી / દોરવું', example: 'Teacher designed a square on board', example_gujarati: 'શિક્ષકે બોર્ડ પર ચોરસ દોર્યુ.', pron: '' },
    // Set 13 ()
    { id: 61, set: 'Set 13', word: 'Divide', pronunciation_guj: 'વહેંચવું', example: 'The teacher divided the class into groups.', example_gujarati: 'શિક્ષકે ક્લાસને જૂથોમાં વહેંચ્યા', pron: 'ડિવાઇડ' },
    { id: 62, set: 'Set 13', word: 'Focus', pronunciation_guj: 'ધ્યાન કેન્દ્રિત કરવું', example: 'Students should focus on studies.', example_gujarati: 'વિદ્યાર્થીઓએ અભ્યાસ પર ધ્યાન કેન્દ્રિત કરવું જોઈએ.', pron: 'ફોકસ' },
    { id: 63, set: 'Set 13', word: 'Learn', pronunciation_guj: 'શીખવું', example: 'We must learn English', example_gujarati: 'આપણે અંગ્રેજી શીખવું જ જોઈએ.', pron: 'લર્ન' },
    { id: 64, set: 'Set 13', word: 'Expand', pronunciation_guj: 'વિસ્તૃત કરવું', example: 'The company wants to expand its business.', example_gujarati: 'કંપની તેનો વ્યવસાય વિસ્તૃત કરવા માગે છે.', pron: 'એક્સપેન્ડ' },
    { id: 65, set: 'Set 13', word: 'Lead', pronunciation_guj: 'નેતૃત્વ કરવું', example: 'She will lead the new team.', example_gujarati: 'તેણી નવી ટીમનું નેતૃત્વ કરશે.', pron: 'લીડ' },
    // Set 14 (24-09-2025) - Greeting Words
    { id: 66, set: 'Set 14', word: 'Good Morning', pronunciation_guj: 'શુભ સવાર, સુપ્રભાત', example: 'Good Morning, Principal sir', example_gujarati: 'આચાર્યશ્રી સુપ્રભાત', pron: 'ગુડ મોર્નિંગ' },
    { id: 67, set: 'Set 14', word: 'Good Day', pronunciation_guj: 'શુભ દિવસ', example: 'Good day, madam.', example_gujarati: 'શુભ દિવસ મેડમ', pron: 'ગુડ ડે' },
    { id: 68, set: 'Set 14', word: 'Good Afternoon', pronunciation_guj: 'શુભ સાંજ! / બપોર', example: 'Good afternoon! I hope your day’s been good.”', example_gujarati: 'શુભ સાંજ / બપોર આશા છે તમારો દિવસ સારો ગયો.', pron: 'ગુડ આફટરનુન' },
    { id: 69, set: 'Set 14', word: 'Good Night', pronunciation_guj: 'શુભ રાત્રી', example: 'Good night, see you tomorrow.', example_gujarati: 'શુભ રાત્રી, કાલે મળીએ.', pron: 'ગુડ નાઇટ' },
    { id: 70, set: 'Set 14', word: 'Welcome', pronunciation_guj: 'સ્વાગત કરવુ', example: 'Welcome to our office..', example_gujarati: 'અમારા ઓફિસમાં આપનું સ્વાગત છે.', pron: 'વેલ કમ' },
    // Set 15 (25-09-2025)
    { id: 71, set: 'Set 15', word: 'Divide', pronunciation_guj: 'વહેંચવું', example: 'The teacher divided the class into groups.', example_gujarati: 'શિક્ષકે ક્લાસને જૂથોમાં વહેંચ્યો.', pron: 'ડીવાઇડ' },
    { id: 72, set: 'Set 15', word: 'Gather', pronunciation_guj: 'ભેગું કરવું', example: 'They gathered information from all sources.', example_gujarati: 'તેમણે બધા સ્ત્રોતોમાંથી માહિતી ભેગી કરી.', pron: 'ગેઘર' },
    { id: 73, set: 'Set 15', word: 'Ignore', pronunciation_guj: 'અવગણવું', example: 'We should not ignore small mistakes.', example_gujarati: 'અમારે નાની ભૂલો અવગણવી નહીં જોઈએ.', pron: 'ઇગ્નોર' },
    { id: 74, set: 'Set 15', word: 'Plan', pronunciation_guj: 'યોજના બનાવવી', example: 'They planned a trip for next month.', example_gujarati: 'તેમણે આગામી મહિને પ્રવાસની યોજના બનાવી.', pron: 'પ્લાન' },
    { id: 75, set: 'Set 15', word: 'Include', pronunciation_guj: 'સામેલ કરવું', example: 'The list includes all names.', example_gujarati: 'યાદીમાં બધા નામ સામેલ છે.', pron: 'ઇનક્લુડ' },
    // Set 16 (26-09-2025)
    { id: 76, set: 'Set 16', word: 'Obtain', pronunciation_guj: 'મેળવવું', example: 'You must obtain permission before entering.', example_gujarati: 'પ્રવેશ કરતા પહેલા તમારે પરવાનગી મેળવવી પડશે.', pron: 'ઓબટેઇન' },
    { id: 77, set: 'Set 16', word: 'Open', pronunciation_guj: 'ખોલવું', example: 'Please open the file carefully.', example_gujarati: 'કૃપા કરીને ફાઇલ ધ્યાનથી ખોલો.', pron: 'ઓપન' },
    { id: 78, set: 'Set 16', word: 'Close', pronunciation_guj: 'બંધ કરવું', example: 'Please close the door.', example_gujarati: 'કૃપા કરીને દરવાજો બંધ કરો', pron: 'ક્લોઝ' },
    { id: 79, set: 'Set 16', word: 'Involve', pronunciation_guj: 'સામેલ થવું', example: 'All employees are involved in the project.', example_gujarati: 'બધા કર્મચારીઓ પ્રોજેક્ટમાં સામેલ છે.', pron: 'ઇન્વોલ્વ' },
    { id: 80, set: 'Set 16', word: 'Perform', pronunciation_guj: 'પ્રદર્શન કરવું', example: 'The artist performed well on stage.', example_gujarati: 'કલાકારે મંચ પર સારું પ્રદર્શન કર્યું.', pron: 'પર્ફોર્મ' },
    // Set 17 (29-09-2025)
    { id: 81, set: 'Set 17', word: 'Agenda', pronunciation_guj: 'કાર્યક્રમ / ચર્ચાના મુદ્દા', example: 'what is the agenda of meeting ?', example_gujarati: 'મિટીંગના ચર્ચાના મુદ્દા શુ છે?', pron: 'એજન્ડા' },
    { id: 82, set: 'Set 17', word: 'Brief', pronunciation_guj: 'ટૂંકું વર્ણન', example: 'She gave a brief report on the progress.', example_gujarati: 'તેણીએ પ્રગતિ પર ટૂંકી રિપોર્ટ આપી.', pron: 'બ્રિફ' },
    { id: 83, set: 'Set 17', word: 'Draft', pronunciation_guj: 'ડ્રાફ્ટ / રૂપરેખા', example: 'He prepared a draft of the letter.', example_gujarati: 'તેણે પત્રનો ડ્રાફ્ટ તૈયાર કર્યો.', pron: 'ડ્રાફ્ટ' },
    { id: 84, set: 'Set 17', word: 'Circulate', pronunciation_guj: 'પ્રસાર કરવું / વહેંચવું', example: 'The notice was circulated to all staff.', example_gujarati: 'નોટિસ બધાં સ્ટાફમાં વહેંચાઈ હતી.', pron: 'સર્ક્યુલેટ' },
    { id: 85, set: 'Set 17', word: 'Share', pronunciation_guj: 'વહેંચવું / રજુ કરવું', example: 'Please share your ideas.', example_gujarati: 'કૃપા કરીને તમારા વિચારો રજુ કરો.', pron: 'શેર' },
    // Set 18 (30-09-2025)
    { id: 86, set: 'Set 18', word: 'Observe', pronunciation_guj: 'અવલોકન કરવું', example: 'Teachers observe the students during exams.', example_gujarati: 'શિક્ષકોએ પરીક્ષા દરમિયાન વિદ્યાર્થીઓનું અવલોકન કરે છે.', pron: 'ઓબસર્વ' },
    { id: 87, set: 'Set 18', word: 'Present', pronunciation_guj: 'રજૂ કરવું', example: 'He presented his project to the committee..', example_gujarati: 'તેણે કમિટીને પોતાનો પ્રોજેક્ટ રજૂ કર્યો.', pron: 'પ્રેઝન્ટ' },
    { id: 88, set: 'Set 18', word: 'Prioritize', pronunciation_guj: 'પ્રાથમિકતા આપવી', example: 'We must prioritize important tasks.', example_gujarati: 'આપણે મહત્વપૂર્ણ કાર્યોને પ્રાથમિકતા આપવી જોઈએ.', pron: 'પ્રાઓરીટીઝ' },
    { id: 89, set: 'Set 18', word: 'Propose', pronunciation_guj: 'પ્રસ્તાવ મૂકવો', example: 'She proposed a new idea.', example_gujarati: 'તેણીએ એક નવો વિચાર પ્રસ્તાવિત કર્યો.', pron: 'પ્રપોસ' },
    { id: 90, set: 'Set 18', word: 'Record', pronunciation_guj: 'રેકોર્ડ કરવો / નોંધવું', example: 'Please record the video of a dance.', example_gujarati: 'કૃપા કરીને નૃત્યનો વિડીઓ રેકોર્ડ કરો', pron: 'રેકોર્ડ' },
    // Set 19 (01-10-2025)
    { id: 91, set: 'Set 19', word: 'Control', pronunciation_guj: 'નિયંત્રણ રાખવું', example: 'The teacher controlled the noisy class..', example_gujarati: 'શિક્ષકે અવાજ કરતો ક્લાસને નિયંત્રિત કર્યો', pron: 'કન્ટ્રોલ' },
    { id: 92, set: 'Set 19', word: 'Courage', pronunciation_guj: 'હિંમત', example: 'It takes courage to say sorry.', example_gujarati: 'માફી માંગવા માટે હિંમત જોઈએ.', pron: 'કરેઝ' },
    { id: 93, set: 'Set 19', word: 'Engage', pronunciation_guj: 'જોડાવું / વ્યસ્ત રાખવું', example: 'The trainer engaged students in activities..', example_gujarati: 'ટ્રેનરે વિદ્યાર્થીઓને પ્રવૃત્તિઓમાં જોડ્યા.', pron: 'એન્ગેજ' },
    { id: 94, set: 'Set 19', word: 'Expect', pronunciation_guj: 'અપેક્ષા રાખવી', example: 'The teacher expects good results.', example_gujarati: 'શિક્ષક સારા પરિણામોની અપેક્ષા રાખે છે.', pron: 'એક્સપેક્ટ' },
    { id: 95, set: 'Set 19', word: 'Refer', pronunciation_guj: 'સંદર્ભ આપવો', example: 'Please refer to the attached file..', example_gujarati: 'કૃપા કરીને જોડેલી ફાઇલ જુઓ', pron: 'રીફર' },
    // Set 20 (03-10-2025)
    { id: 96, set: 'Set 20', word: 'Register', pronunciation_guj: 'નોંધણી કરવી', example: 'You must register for the event.', example_gujarati: 'તમારે કાર્યક્રમની નોંધણી કરવી પડશે.', pron: 'રજીસ્ટ્રર' },
    { id: 97, set: 'Set 20', word: 'Request', pronunciation_guj: 'વિનંતી કરવી', example: 'I request your support in this matter.', example_gujarati: 'હું આ બાબતમાં તમારો સહયોગ માગું છું.', pron: 'રીકવેસ્ટ' },
    { id: 98, set: 'Set 20', word: 'Schedule', pronunciation_guj: 'સમયપત્રક / કાર્યક્રમ', example: 'The school published the exam schedule..', example_gujarati: 'શાળાએ પરીક્ષાનું સમયપત્રક પ્રકાશિત કર્યું.', pron: 'શેડ્યૂલ' },
    { id: 99, set: 'Set 20', word: 'Measure', pronunciation_guj: 'માપવું', example: 'The engineer measured the length.', example_gujarati: 'એન્જિનિયરે લંબાઈ માપી.', pron: 'મેઝર' },
    { id: 100, set: 'Set 20', word: 'Increase', pronunciation_guj: 'વધારો કરવો', example: 'The company increased the salary.', example_gujarati: 'કંપનીએ પગારમાં વધારો ક', pron: 'ઇનક્રીઝ' },
    // Set 21 (04-10-2025)
    { id: 101, set: 'Set 21', word: 'Monitor', pronunciation_guj: 'દેખરેખ રાખવી', example: 'The principal will monitor the exam.', example_gujarati: 'પ્રિન્સિપાલ પરીક્ષાની દેખરેખ રાખશે..', pron: 'મોનિટર' },
    { id: 102, set: 'Set 21', word: 'Motivate', pronunciation_guj: 'પ્રોત્સાહિત કરવું', example: 'The coach motivated the players.', example_gujarati: 'કોચે ખેલાડીઓને પ્રોત્સાહિત કર્યા..', pron: 'મોટિવેટ' },
    { id: 103, set: 'Set 21', word: 'Outline', pronunciation_guj: 'રૂપરેખા આપવી', example: 'He gave an outline of the project.', example_gujarati: 'તેણે પ્રોજેક્ટની રૂપરેખા આપી..', pron: 'આઉટલાઇન' },
    { id: 104, set: 'Set 21', word: 'Prevent', pronunciation_guj: 'રોકવું', example: 'We must prevent accidents at work.', example_gujarati: 'અમારે કાર્યસ્થળ પર અકસ્માતો રોકવા જોઈએ..', pron: 'પ્રિવેન્ટ' },
    { id: 105, set: 'Set 21', word: 'Inspire', pronunciation_guj: 'પ્રેરણા આપવી', example: 'The teacher inspired students to work hard.', example_gujarati: 'શિક્ષકે વિદ્યાર્થીઓને મહેનત કરવાની પ્રેરણા આપી.', pron: 'ઇન્સ્પાયર' },
    // Set 22 (06-8-2025)
    { id: 106, set: 'Set 22', word: 'Maintain', pronunciation_guj: 'જાળવવું', example: 'We must maintain discipline in the office.', example_gujarati: 'અમારે ઓફિસમાં શિસ્ત જાળવવી જોઈએ.', pron: 'મેન્ટેન' },
    { id: 107, set: 'Set 22', word: 'Introduce', pronunciation_guj: 'પરિચય કરાવવો', example: 'He introduced the guest to the class.', example_gujarati: 'તેણે મહેમાનનો ક્લાસને પરિચય કરાવ્યો.', pron: 'ઈન્ટ્રોડ્યુસ' },
    { id: 108, set: 'Set 22', word: 'Nominate', pronunciation_guj: 'પસંદગી કરવી', example: 'He was nominated for the award.', example_gujarati: 'તેને એવોર્ડ માટે પસંદ કરવામાં આવ્યો.', pron: 'નોમિનેટ' },
    { id: 109, set: 'Set 22', word: 'Justify', pronunciation_guj: 'યોગ્ય ઠેરવવું', example: 'You must justify your decision.', example_gujarati: 'તમારે તમારો નિર્ણય યોગ્ય ઠેરવવો પડશે.', pron: 'જસ્ટિફાય' },
    { id: 110, set: 'Set 22', word: 'Notify', pronunciation_guj: 'સૂચિત કરવું', example: 'Please notify me in advance.', example_gujarati: 'કૃપા કરીને મને પહેલેથી સૂચિત કરો.', pron: 'નોટિફાય' },
    // Set 23 (07-10-2025)
    { id: 111, set: 'Set 23', word: 'Identify', pronunciation_guj: 'ઓળખવું', example: 'The teacher identified the problems.', example_gujarati: 'શિક્ષકે સમસ્યાઓને ઓળખી.', pron: 'આઈડેન્ટિફાય' },
    { id: 112, set: 'Set 23', word: 'Decrease', pronunciation_guj: 'ઘટાડવું, ઓછુ કરવુ', example: 'The temperature will decrease at night.', example_gujarati: 'રાત્રે તાપમાન ઘટશે.', pron: 'ડિક્રીઝ' },
    { id: 113, set: 'Set 23', word: 'Overcome', pronunciation_guj: 'પાર પામવું', example: 'We must overcome our weaknesses.', example_gujarati: 'અમારે અમારી કમજોરીઓ પર પાર પામવું જોઈએ.', pron: 'ઓવરકમ' },
    { id: 114, set: 'Set 23', word: 'Express', pronunciation_guj: 'વ્યક્ત કરવું', example: 'She expressed her opinion clearly.', example_gujarati: 'તેણે પોતાની વિચાર સ્પષ્ટ રીતે વ્યક્ત કરી.', pron: 'એક્સપ્રેસ' },
    { id: 115, set: 'Set 23', word: 'Facilitate', pronunciation_guj: 'સરળ બનાવવું / સુવિધા આપવી', example: 'The officer facilitated the process.', example_gujarati: 'અધિકારીએ પ્રક્રિયા સરળ બનાવી.', pron: 'ફેસિલિટેટ' },
    // Set 24 (08-10-2025)
    { id: 116, set: 'Set 24', word: 'Execute', pronunciation_guj: 'અમલમાં મૂકવું', example: 'The company will execute the plan next week.', example_gujarati: 'કંપની આગામી અઠવાડિયે યોજનાનો અમલ કરશે.', pron: 'એક્ઝિક્યુટ' },
    { id: 117, set: 'Set 24', word: 'Feedback', pronunciation_guj: 'પ્રતિસાદ', example: 'Please give feedback on the presentation.', example_gujarati: 'કૃપા કરીને પ્રેઝન્ટેશન પર પ્રતિસાદ આપો.', pron: 'ફીડબેક' },
    { id: 118, set: 'Set 24', word: 'Efficient', pronunciation_guj: 'કાર્યક્ષમ', example: 'She is an efficient worker.', example_gujarati: 'તે કાર્યક્ષમ કામદાર છે.', pron: 'ઇફિશન્ટ' },
    { id: 119, set: 'Set 24', word: 'Deadline', pronunciation_guj: 'સમયમર્યાદા', example: 'The report must be completed before the deadline.', example_gujarati: 'રિપોર્ટ સમયમર્યાદા પહેલાં પૂર્ણ કરવો જોઈએ.', pron: 'ડેડલાઇન' },
    { id: 120, set: 'Set 24', word: 'Coordinate', pronunciation_guj: 'સંકલન કરવું', example: 'He will coordinate the event.', example_gujarati: 'તે કાર્યક્રમનું સંકલન કરશે.', pron: 'કોર્ડિનેટ' },
    // Set 25 (09-10-2025)
    { id: 121, set: 'Set 25 (09-10-2025)', word: 'Appraise', pronunciation_guj: 'મૂલ્યાંકન કરવું', example: 'The Company will appraise employee performance annually.', example_gujarati: 'કંપની દર વર્ષે કર્મચારીઓની કામગીરીનું મૂલ્યાંકન કરશે.', pron: 'એપ્રેઝ' },
    { id: 122, set: 'Set 25 (09-10-2025)', word: 'Audit', pronunciation_guj: 'ઓડિટ કરવું', example: 'The finance team will audit the accounts next week.', example_gujarati: 'ફાઇનાન્સ ટીમ આવતા અઠવાડિયે ખાતાઓનું ઓડિટ કરશે.', pron: 'ઓડિટ' },
    { id: 123, set: 'Set 25 (09-10-2025)', word: 'Forecast', pronunciation_guj: 'આગાહી કરવી', example: 'The manager forecasted next month’s sales trends.', example_gujarati: 'મેનેજરે આવતા મહિને વેચાણની પ્રવૃત્તિની આગાહી કરી.', pron: 'ફોરકાસ્ટ' },
    { id: 124, set: 'Set 25 (09-10-2025)', word: 'Formulate', pronunciation_guj: 'તૈયાર કરવું / રચવું', example: 'We will formulate a plan to increase productivity.', example_gujarati: 'અમે ઉત્પાદન વધારવા માટે યોજના તૈયાર કરીશું.', pron: 'ફોર્મ્યુલેટ' },
    { id: 125, set: 'Set 25 (09-10-2025)', word: 'Benchmark', pronunciation_guj: 'માપદંડ / તુલનાત્મક ધોરણ', example: 'The company set a benchmark for quality standards.', example_gujarati: 'કંપનીએ ગુણવત્તા ધોરણ માટે માપદંડ સેટ કર્યો.', pron: 'બેન્ચમાર્ક' },
     // Set 26 (10-10-2025)
    { id: 126, set: 'Set 26 (10-10-2025)', word: 'Liaise', pronunciation_guj: 'સંકળાવા / સંબંધ રાખવો', example: 'She liaised with other departments for the project.', example_gujarati: 'તેણીએ પ્રોજેક્ટ માટે અન્ય વિભાગો સાથે સંબંધ રાખ્યો.', pron: 'લેઆઝ' },
    { id: 127, set: 'Set 26 (10-10-2025)', word: 'Streamline', pronunciation_guj: 'કાર્યક્ષમ બનાવવું / સુગમિત કરવું', example: 'The office streamlined the filing system for efficiency.', example_gujarati: 'ઓફિસે કાર્યક્ષમતા માટે ફાઇલિંગ સિસ્ટમને સુગમિત કર્યું.', pron: 'સ્ટ્રીમલાઇન' },
    { id: 128, set: 'Set 26 (10-10-2025)', word: 'Validate', pronunciation_guj: 'માન્ય કરવું', example: 'Please validate the data before submission.', example_gujarati: 'કૃપા કરીને સબમિશન પહેલાં ડેટાને માન્ય કરો.', pron: 'વેલિડેટ' },
    { id: 129, set: 'Set 26 (10-10-2025)', word: 'Reorganize', pronunciation_guj: 'પુનઃવ્યવસ્થા કરવી', example: 'The company reorganized its departments for efficiency.', example_gujarati: 'કંપનીએ કાર્યક્ષમતા માટે તેના વિભાગોની પુનઃવ્યવસ્થા કરી.', pron: 'રિ-ઓર્ગેનાઈઝ' },
    { id: 130, set: 'Set 26 (10-10-2025)', word: 'Consolidate', pronunciation_guj: 'મજબૂત બનાવવું / એકીકૃત કરવું', example: 'The manager consolidated reports from all teams.', example_gujarati: 'મેનેજરે તમામ ટીમોના રિપોર્ટને એકીકૃત કર્યું.', pron: 'કૉન્સોલિડેટ' },
     // Set 27 (13-10-2025)
    { id: 131, set: 'Set 27 (13-10-2025)', word: 'Integrate', pronunciation_guj: 'એકીકૃત કરવું', example: 'The software integrates all financial data.', example_gujarati: 'સોફ્ટવેર બધા નાણાકીય માહિતીને એકીકૃત કરે છે.', pron: 'ઈન્ટિગ્રેટ' },
    { id: 132, set: 'Set 27 (13-10-2025)', word: 'Initiate', pronunciation_guj: 'પ્રારંભ કરવું', example: 'The team initiated a new training program.', example_gujarati: 'ટીમે નવો તાલીમ કાર્યક્રમ પ્રારંભ કર્યો.', pron: 'ઇનિશિએટ' },
    { id: 133, set: 'Set 27 (13-10-2025)', word: 'Reassess', pronunciation_guj: 'ફરીથી મૂલ્યાંકન કરવું', example: 'We need to reassess our current strategy.', example_gujarati: 'અમારે અમારી હાલની વ્યૂહરચનાનું ફરીથી મૂલ્યાંકન કરવું જોઇએ.', pron: 'રિ-એસેસ' },
    { id: 134, set: 'Set 27 (13-10-2025)', word: 'Delegate', pronunciation_guj: 'કામ સોંપવું', example: 'Leaders delegate authority to capable employees.', example_gujarati: 'નેતાઓ ક્ષમતા ધરાવતા કર્મચારીઓને સત્તા સોંપે છે.', pron: 'ડેલીગેટ' },
    { id: 135, set: 'Set 27 (13-10-2025)', word: 'Collaborate', pronunciation_guj: 'સહયોગ કરવો', example: 'Teams collaborate to complete major projects.', example_gujarati: 'ટીમો મોટી યોજનાઓ પૂરી કરવા માટે સહયોગ કરે છે.', pron: 'કોલેબોરેટ' },
     // Set 28 (14-10-2025)
    { id: 136, set: 'Set 28 (14-10-2025)', word: 'Optimize', pronunciation_guj: 'વધુ કાર્યક્ષમ બનાવવું', example: 'We need to optimize the supply chain.', example_gujarati: 'અમારે સપ્લાય ચેઇનને વધુ કાર્યક્ષમ બનાવવું.', pron: 'ઑપ્ટિમાઇઝ' },
    { id: 137, set: 'Set 28 (14-10-2025)', word: 'Revise', pronunciation_guj: 'સુધારવું / ફેરફાર કરવો', example: 'The report was revised before submission.', example_gujarati: 'રિપોર્ટ સબમિશન પહેલા સુધારાયું.', pron: 'રિવાઈઝ' },
    { id: 138, set: 'Set 28 (14-10-2025)', word: 'Innovate', pronunciation_guj: 'નવીનતા લાવવી', example: 'The firm constantly innovates to stay competitive.', example_gujarati: 'કંપની સ્પર્ધાત્મક રહેવા માટે સતત નવીનતા લાવે છે.', pron: 'ઇનોવેટ' },
    { id: 139, set: 'Set 28 (14-10-2025)', word: 'Assess', pronunciation_guj: 'મૂલ્યાંકન કરવું', example: 'Managers assess staff performance annually.', example_gujarati: 'મેનેજર દર વર્ષે કર્મચારીઓની કામગીરીનું મૂલ્યાંકન કરે છે.', pron: 'એસેસ' },
    { id: 140, set: 'Set 28 (14-10-2025)', word: 'Align', pronunciation_guj: 'સુસંગત કરવું', example: 'We must align our goals with the company vision.', example_gujarati: 'અમારે અમારા લક્ષ્યો કંપનીના દૃષ્ટિકોણ સાથે સુસંગત કરવા જોઈએ.', pron: 'એલાઇન' },
     // Set 29 (15-10-2025)
    { id: 141, set: 'Set 29 (15-10-2025)', word: 'Evaluate', pronunciation_guj: 'મૂલ્યાંકન કરવું', example: 'Teachers evaluate students’ progress every month.', example_gujarati: 'શિક્ષક દર મહિને વિદ્યાર્થીઓની પ્રગતિનું મૂલ્યાંકન કરે છે.', pron: 'એવેલ્યુએટ' },
    { id: 142, set: 'Set 29 (15-10-2025)', word: 'Allocate', pronunciation_guj: 'ફાળવવું / વહેંચવું', example: 'The manager allocated tasks to team members.', example_gujarati: 'મેનેજરે ટીમના સભ્યોને કામ ફાળવ્યું.', pron: 'એલોકેટ' },
    { id: 143, set: 'Set 29 (15-10-2025)', word: 'Procure', pronunciation_guj: 'મેળવવું / પ્રાપ્ત કરવું', example: 'The office procured new laptops for staff.', example_gujarati: 'ઓફિસે સ્ટાફ માટે નવા લેપટોપ મેળવ્યા.', pron: 'પ્રોક્યુર' },
    { id: 144, set: 'Set 29 (15-10-2025)', word: 'Negotiate', pronunciation_guj: 'વાતચીત કરીને સમાધાન કરવું', example: 'The team negotiated the contract terms with suppliers.', example_gujarati: 'ટીમે સપ્લાયર્સ સાથે કરારની શરતો પર વાતચીત કરી.', pron: 'નેગોશિએટ' },
    { id: 145, set: 'Set 29 (15-10-2025)', word: 'Document', pronunciation_guj: 'દસ્તાવેજ તૈયાર કરવો', example: 'Please document all procedures clearly.', example_gujarati: 'કૃપા કરીને બધા પ્રક્રીયાઓ સ્પષ્ટ રીતે દસ્તાવેજ કરો.', pron: 'ડોક્યુમેન્ટ' },
     // --- New Set 30 (16-10-2025) ---
    { id: 146, set: 'Set 30 (16-10-2025)', word: 'Track', pronunciation_guj: 'અનુસરીને નિરીક્ષણ કરવું', example: 'Managers track project milestones regularly.', example_gujarati: 'મેનેજર્સ નિયમિત રીતે પ્રોજેક્ટ માઇલસ્ટોન્સ અનુસરે છે.', pron: 'ટ્રૅક' },
    { id: 147, set: 'Set 30 (16-10-2025)', word: 'Consult', pronunciation_guj: 'સલાહ લેવી / પરામર્શ કરવો', example: 'Employees consult experts for guidance.', example_gujarati: 'કર્મચારીઓ માર્ગદર્શન માટે નિષ્ણાતોની સલાહ લે છે.', pron: 'કન્સલ્ટ' },
    { id: 148, set: 'Set 30 (16-10-2025)', word: 'Blueprint', pronunciation_guj: 'નકશો, રૂપરેખા', example: 'Follow the technical blueprint for installation.', example_gujarati: 'ઇન્સ્ટોલેશન માટે તકનીકી નકશાને અનુસરો.', pron: 'બ્લૂપ્રિન્ટ' },
    { id: 149, set: 'Set 30 (16-10-2025)', word: 'Dimension', pronunciation_guj: 'પરિમાણ, માપ', example: 'Check all three dimensions (length, width, height).', example_gujarati: 'ત્રણેય પરિમાણો (લંબાઈ, પહોળાઈ, ઊંચાઈ) તપાસો.', pron: 'ડાયમેન્શન' },
    { id: 150, set: 'Set 30 (16-10-2025)', word: 'Layout', pronunciation_guj: 'ગોઠવણ, યોજના', example: 'The machine shop layout is planned for efficiency.', example_gujarati: 'મશીન શોપની ગોઠવણ કાર્યક્ષમતા માટે આયોજન કરવામાં આવ્યું છે.', pron: 'લેઆઉટ' },
     // --- New Set 31 (17-10-2025) ---
    { id: 151, set: 'Set 31 (17-10-2025)', word: 'Compliance', pronunciation_guj: 'નિયમો અને નીતિઓનું પાલન', example: 'Compliance with safety rules is necessary.', example_gujarati: 'સુરક્ષા નિયમોનું પાલન જરૂરી છે.', pron: 'કોમ્પ્લાયન્સ' },
    { id: 152, set: 'Set 31 (17-10-2025)', word: 'Insight', pronunciation_guj: 'ઊંડું સમજણ અથવા જ્ઞાન', example: 'Her insight helped solve the problem.', example_gujarati: 'તેની ઊંડી સમજણથી સમસ્યા ઉકેલી શકાઈ.', pron: 'ઇન્સાઇટ' },
    { id: 153, set: 'Set 31 (17-10-2025)', word: 'Strategy', pronunciation_guj: 'યોજના કે રણનીતિ', example: 'We need a new strategy for marketing.', example_gujarati: 'માર્કેટિંગ માટે નવી યોજના જોઈએ.', pron: 'સ્ટ્રેટેજી' },
    { id: 154, set: 'Set 31 (17-10-2025)', word: 'Model', pronunciation_guj: 'નમૂનો, પ્રતિરૂપ', example: 'A three-dimensional model helps visualize the part.', example_gujarati: 'ત્રિ-પરિમાણીય નમૂનો ભાગની કલ્પના કરવામાં મદદ કરે છે.', pron: 'મોડેલ' },
    { id: 155, set: 'Set 31 (17-10-2025)', word: 'Cost', pronunciation_guj: 'ખર્ચ', example: 'Calculate the cost of production.', example_gujarati: 'ઉત્પાદનનો ખર્ચ ગણો.', pron: 'કોસ્ટ' },

];



// =================================================================
// --- 2. GLOBAL ELEMENTS & INITIAL DATA PROCESSING ---
// =================================================================

// DOM Elements
const mainContent = document.getElementById('main-content');
const navHome = document.getElementById('nav-home');
const navTest = document.getElementById('nav-test'); // The 'Test Preparation' link
const testOptionsDiv = document.getElementById('test-system-options'); // Container for checkboxes/start button (in main content now)
const setSelectionArea = document.getElementById('set-selection-area');
const startTestBtn = document.getElementById('start-test-btn');
const navLinks = document.querySelectorAll('.sidebar nav ul li a');
const setNavigationArea = document.getElementById('set-navigation-area');


// Test State Variables
let testWords = [];
let currentQuestionIndex = 0;
let score = 0;

// Data Processing
const uniqueSets = [...new Set(rawWordData.map(word => word.set))];
const wordsBySet = rawWordData.reduce((acc, word) => {
    acc[word.set] = acc[word.set] || [];
    acc[word.set].push(word);
    return acc;
}, {});

// =================================================================
// --- 3. HELPER FUNCTIONS ---
// =================================================================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getDecoys(correctAnswerGujarati, count = 3) {
    const allMeanings = rawWordData.map(word => word.pronunciation_guj);
    let decoyPool = allMeanings.filter(meaning => meaning !== correctAnswerGujarati);
    decoyPool = [...new Set(decoyPool)];
    shuffleArray(decoyPool);
    let decoys = decoyPool.slice(0, count);

    while (decoys.length < count) {
        const fallbackMeaning = rawWordData[Math.floor(Math.random() * rawWordData.length)].pronunciation_guj;
        if (!decoys.includes(fallbackMeaning) && fallbackMeaning !== correctAnswerGujarati) {
            decoys.push(fallbackMeaning);
        }
        decoys = [...new Set(decoys)].slice(0, count);
    }
    return decoys.slice(0, count);
}

function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Web Speech API not supported.");
    }
}


// =================================================================
// --- 4. NAVIGATION & RENDERING LOGIC (General) ---
// =================================================================

function setActiveNav(activeId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    if (activeId) {
        document.getElementById(activeId).classList.add('active');
    }

    // Also reset individual set navigation highlights
    if (setNavigationArea) {
        setNavigationArea.querySelectorAll('a').forEach(link => {
            link.classList.remove('active');
        });
    }
}

function generateSetHtml(setName, words) {
    // ... (HTML generation for word items, kept brief for focus) ...
    let wordItemsHtml = words.map((word) => `
        <div class="word-item">
            <span class="word-number">${word.id}.</span>
            <div class="word-details">
                <div class="english-word">
                    ${word.word}
                    <button class="sound-btn" data-word="${word.word}"><span style="font-size: 1.1em;">🔊</span></button>
                </div>
                <div class="gujarati-meaning">${word.pronunciation_guj}</div>
                
                <div class="word-example">
                    <strong>Example:</strong> <em>${word.example}</em>
                </div>
                <div class="word-example gujarati">
                    <strong>in gujrati:</strong> <em>${word.example_gujarati}</em>
                </div>
                </div>
        </div>
    `).join('');

    return `
        <div class="word-set">
            <div class="word-set-header">${setName} (${words.length} words)</div>
            ${wordItemsHtml}
        </div>
    `;
}

function renderSetView(setName) {
    // 1. Ensure Test Options are hidden when viewing word lists
    testOptionsDiv.classList.add('hidden');
    mainContent.innerHTML = '';
    
    // ... (rest of renderSetView logic to display word sets) ...
    let htmlContent = [];
    let title = '';

    if (setName === 'All Words') {
        title = '📚 All Words (Grouped by Set)';
        uniqueSets.forEach(set => {
            if (wordsBySet[set]) {
                htmlContent.push(generateSetHtml(set, wordsBySet[set]));
            }
        });
        setActiveNav('nav-home');
    } else if (wordsBySet[setName]) {
        title = `📚 Word Set: ${setName}`;
        htmlContent.push(generateSetHtml(setName, wordsBySet[setName]));
        setActiveNav(null); // Ensure 'nav-home' is not active
        const setLink = document.querySelector(`#set-navigation-area a[data-set="${setName}"]`);
        if(setLink) setLink.classList.add('active');
    } else {
        title = 'Set Not Found';
        mainContent.innerHTML = '<p class="info-message">The requested word set could not be found.</p>';
        return;
    }

    mainContent.innerHTML = `<h2>${title}</h2>` + htmlContent.join('');
    
    // Attach event listeners for the sound buttons
    mainContent.querySelectorAll('.sound-btn').forEach(button => {
        button.addEventListener('click', () => {
            speakWord(button.getAttribute('data-word'));
        });
    });
}

// =================================================================
// --- 5. TEST PREPARATION & QUIZ LOGIC (NEW FLOW) ---
// =================================================================

/** Toggles the start test button based on selection */
function toggleStartButton() {
    const checkedBoxes = setSelectionArea.querySelectorAll('input[type="checkbox"]:checked');
    startTestBtn.disabled = checkedBoxes.length === 0;
}

/** * Renders the options for selecting word sets in the main content area.
 * This is the new "Test Preparation" feature.
 */
function renderTestPreparation() {
    setActiveNav('nav-test');

    // 1. Clear main content display area (if any word list was there)
    mainContent.innerHTML = ''; 
    
    // 2. Show the test options area (which contains the checkboxes and start button)
    testOptionsDiv.classList.remove('hidden'); 
    setSelectionArea.innerHTML = '';
    
    // Reset test state for a new test
    testWords = [];
    currentQuestionIndex = 0;
    score = 0;

    // 3. Create 'Select All' checkbox
    const allCheckbox = document.createElement('div');
    allCheckbox.classList.add('set-checkbox-item');
    allCheckbox.innerHTML = `
        <input type="checkbox" id="set-all" value="All Words">
        <label for="set-all">Select All (${rawWordData.length} words)</label>
    `;
    setSelectionArea.appendChild(allCheckbox);

    // 4. Create checkboxes for each individual set
    uniqueSets.forEach(set => {
        const checkboxItem = document.createElement('div');
        checkboxItem.classList.add('set-checkbox-item');
        const wordCount = wordsBySet[set].length;
        checkboxItem.innerHTML = `
            <input type="checkbox" id="set-${set}" value="${set}" data-count="${wordCount}">
            <label for="set-${set}">${set} (${wordCount} words)</label>
        `;
        setSelectionArea.appendChild(checkboxItem);
    });

    // 5. Add event listeners for checkboxes
    document.getElementById('set-all').addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        setSelectionArea.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            if (cb.id !== 'set-all') {
                cb.checked = isChecked;
            }
        });
        toggleStartButton();
    });

    setSelectionArea.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
            if (cb.id !== 'set-all' && !cb.checked) {
                document.getElementById('set-all').checked = false;
            }
            toggleStartButton();
        });
    });

    toggleStartButton(); // Initial check (button should be disabled)
}


/** Starts the actual quiz/question view in the main content area. */
function renderQuestionView() {
    const selectedCheckboxes = Array.from(setSelectionArea.querySelectorAll('input[type="checkbox"]:checked'))
                                     .filter(cb => cb.id !== 'set-all');
    
    const selectedSets = selectedCheckboxes.map(cb => cb.value);

    // Build the list of words for the test
    testWords = [];
    selectedSets.forEach(set => {
        testWords.push(...wordsBySet[set]);
    });
    
    if (testWords.length === 0) {
        alert('Please select at least one set to start the test.');
        return;
    }

    shuffleArray(testWords); // Randomize the order of questions
    currentQuestionIndex = 0;
    score = 0;

    // 1. Hide the "Test Preparation" options area 
    testOptionsDiv.classList.add('hidden');
    
    // 2. Start the quiz
    renderQuestion();
}

/** Renders the current test question. */
function renderQuestion() {
    if (currentQuestionIndex >= testWords.length) {
        renderTestResult();
        return;
    }
    // ... (The rest of renderQuestion and checkAnswer logic is the same) ...
    const currentWord = testWords[currentQuestionIndex];
    const correctAnswer = currentWord.pronunciation_guj;
    const decoys = getDecoys(correctAnswer, 3);
    let options = [correctAnswer, ...decoys];
    shuffleArray(options); 

    mainContent.innerHTML = `
        <div class="test-container">
            <h3>Question ${currentQuestionIndex + 1} of ${testWords.length}</h3>
            <div class="question-word-area">
                <span class="question-word">${currentWord.word}</span>
                <button class="sound-btn-lg" data-word="${currentWord.word}"><span style="font-size: 1.5em;">🔊</span> Listen</button>
                <div class="example-hint">Example: ${currentWord.example}</div>
            </div>
            
            <p>Select the correct Gujarati meaning:</p>
            <div class="options-container">
                ${options.map((option, index) => `
                    <button class="option-btn" data-answer="${option}" id="option-${index}">
                        ${option}
                    </button>
                `).join('')}
            </div>
            <div id="feedback-message" class="feedback-message"></div>
            <button id="next-question-btn" class="next-btn" disabled>Next Question &raquo;</button>
        </div>
    `;

    // Attach event listeners for options and sound
    mainContent.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', checkAnswer);
    });
    document.getElementById('next-question-btn').addEventListener('click', () => {
        currentQuestionIndex++;
        renderQuestion();
    });
    mainContent.querySelector('.sound-btn-lg').addEventListener('click', (e) => {
        speakWord(e.currentTarget.getAttribute('data-word'));
    });
    
    speakWord(currentWord.word);
}

/** Checks the selected answer and updates the score. */
function checkAnswer(event) {
    const selectedButton = event.currentTarget;
    const selectedAnswer = selectedButton.getAttribute('data-answer');
    const correctAnswer = testWords[currentQuestionIndex].pronunciation_guj;
    const feedbackMessage = document.getElementById('feedback-message');
    const nextButton = document.getElementById('next-question-btn');
    
    // Disable all options after selection
    mainContent.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        selectedButton.classList.add('correct');
        feedbackMessage.innerHTML = '✅ Correct!';
    } else {
        selectedButton.classList.add('incorrect');
        // Find and highlight the correct answer
        mainContent.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.getAttribute('data-answer') === correctAnswer) {
                btn.classList.add('correct');
            }
        });
        feedbackMessage.innerHTML = `❌ Incorrect. The correct meaning is: **${correctAnswer}**`;
    }
    
    nextButton.disabled = false;
}

/** Renders the final result of the test. */
function renderTestResult() {
    const totalQuestions = testWords.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(0);
    // ... (rest of renderTestResult logic is the same) ...
    let message = '';

    if (percentage >= 80) {
        message = 'Excellent work! Keep practicing! 🌟';
    } else if (percentage >= 60) {
        message = 'Good effort! A little more study and you\'ll master them. 👍';
    } else {
        message = 'Keep studying, review the sets, and try again! Rome wasn\'t built in a day. 💪';
    }
    
    mainContent.innerHTML = `
        <div class="test-results">
            <h2>🎉 Test Complete!</h2>
            <p class="score-summary">You scored **${score}** out of **${totalQuestions}**.</p>
            <p class="percentage">That's **${percentage}%**!</p>
            <p class="message">${message}</p>
            <button class="next-btn" onclick="renderTestPreparation()">Retry Test (Select Sets)</button>
            <button class="next-btn" onclick="renderSetView('All Words')">View All Words</button>
        </div>
    `;
}


// =================================================================
// --- 6. INITIALIZATION & EVENT LISTENERS ---
// =================================================================

function generateSetNavigation() {
    let navHtml = uniqueSets.map(set => 
        `<a href="#" data-set="${set}">${set}</a>`
    ).join('');
    setNavigationArea.innerHTML = navHtml;
    
    // Add event listeners to set links
    setNavigationArea.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            renderSetView(e.target.getAttribute('data-set'));
        });
    });
}

/** Initializes the application on load. */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Sidebar Navigation
    generateSetNavigation();

    // 2. Setup Main Navigation Links
    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        renderSetView('All Words');
    });

    // *** CRITICAL CHANGE: navTest now calls the set selection view (Test Preparation) ***
    navTest.addEventListener('click', (e) => {
        e.preventDefault();
        renderTestPreparation();
    });

    // 3. Setup Start Test Button 
    startTestBtn.addEventListener('click', renderQuestionView);

    // 4. Load the default view (All Words)
    renderSetView('All Words');
});
