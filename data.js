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
    { id: 34, set: 7, word: 'Inform', gujaratiMeaning: 'જાણ કરવી', example: 'She informed the team about the changes.', exampleGujarati: 'તેણે ટીમને ફેરફારો વિશે જાણ કરી.' },
    { id: 35, set: 7, word: 'Resolve', gujaratiMeaning: 'ઉકેલવું', example: 'They resolved the issue quickly.', exampleGujarati: 'તેમણે સમસ્યાને ઝડપથી ઉકેલી.' },
    
    // Set 8 (id 36-40)
    { id: 36, set: 8, word: 'Assist', gujaratiMeaning: 'મદદ કરવી', example: 'The assistant will assist during the event.', exampleGujarati: 'સહાયક કાર્યક્રમ દરમિયાન મદદ કરશે.' },
    { id: 37, set: 8, word: 'Conduct', gujaratiMeaning: 'આયોજન કરવું', example: 'The school conducted an exam.', exampleGujarati: 'શાળાએ પરીક્ષાનું આયોજન કર્યું.' },
    { id: 38, set: 8, word: 'Evaluate', gujaratiMeaning: 'મૂલ્યાંકન કરવું', example: 'The teacher evaluated the assignments.', exampleGujarati: 'શિક્ષકે સોંપણીઓનું મૂલ્યાંકન કર્યું.' },
    { id: 39, set: 8, word: 'Implement', gujaratiMeaning: 'અમલમાં મૂકવું', example: 'The company implemented a new policy.', exampleGujarati: 'કંપનીએ નવી નીતિ અમલમાં મૂકી.' },
    { id: 40, set: 8, word: 'Participate', gujaratiMeaning: 'ભાગ લેવો', example: 'Students participated in the competition.', exampleGujarati: 'વિદ્યાર્થીઓએ સ્પર્ધામાં ભાગ લીધો.' },
    
    // Set 9 (id 41-45)
    { id: 41, set: 9, word: 'Achieve', gujaratiMeaning: 'પ્રાપ્ત કરવું', example: 'She achieved the highest score.', exampleGujarati: 'તેણે સૌથી વધુ સ્કોર પ્રાપ્ત કર્યો.' },
    { id: 42, set: 9, word: 'Address', gujaratiMeaning: 'સંબોધન કરવું', example: 'The principal addressed the students.', exampleGujarati: 'આચાર્યશ્રીએ વિદ્યાર્થીઓને સંબોધન કર્યું.' },
    { id: 43, set: 9, word: 'Encourage', gujaratiMeaning: 'પ્રોત્સાહિત કરવું', example: 'He encouraged the team to try harder.', exampleGujarati: 'તેણે ટીમને વધુ મહેનત કરવા પ્રોત્સાહિત કરી.' },
    { id: 44, set: 9, word: 'Manage', gujaratiMeaning: 'વ્યવસ્થાપન કરવું', example: 'She managed the project efficiently.', exampleGujarati: 'તેણે પ્રોજેક્ટનું વ્યવસ્થાપન અસરકારક રીતે કર્યું.' },
    { id: 45, set: 9, word: 'Review', gujaratiMeaning: 'સમીક્ષા કરવી', example: 'The teacher reviewed the homework.', exampleGujarati: 'શિક્ષકે હોમવર્કની સમીક્ષા કરી.' },
    
    // Set 10 (id 46-50)
    { id: 46, set: 10, word: 'Analyze', gujaratiMeaning: 'વિશ્લેષણ કરવું', example: 'The scientist analyzed the data.', exampleGujarati: 'વૈજ્ઞાનિકે ડેટાનું વિશ્લેષણ કર્યું.' },
    { id: 47, set: 10, word: 'Complete', gujaratiMeaning: 'પૂર્ણ કરવું', example: 'They completed the task on time.', exampleGujarati: 'તેમણે સમયસર કાર્ય પૂર્ણ કર્યું.' },
    { id: 48, set: 10, word: 'Develop', gujaratiMeaning: 'વિકાસ કરવો', example: 'The company developed a new product.', exampleGujarati: 'કંપનીએ નવું ઉત્પાદન વિકસાવ્યું.' },
    { id: 49, set: 10, word: 'Proceed', gujaratiMeaning: 'આગળ વધવું', example: 'We can proceed with the plan.', exampleGujarati: 'અમે યોજના સાથે આગળ વધી શકીએ.' },
    { id: 50, set: 10, word: 'Verify', gujaratiMeaning: 'ચકાસણી કરવી', example: 'Please verify the details before submission.', exampleGujarati: 'સબમિશન પહેલાં વિગતોની ચકાસણી કરો.' },
    
    // Set 11 (id 51-55)
    { id: 51, set: 11, word: 'Adjust', gujaratiMeaning: 'ગોઠવવું / સમાયોજન કરવું', example: 'He adjusted the settings on the machine.', exampleGujarati: 'તેણે મશીનની સેટિંગ્સ ગોઠવી.' },
    { id: 52, set: 11, word: 'Confirm', gujaratiMeaning: 'પુષ્ટિ કરવી', example: 'She confirmed the appointment.', exampleGujarati: 'તેણે નિમણૂકની પુષ્ટિ કરી.' },
    { id: 53, set: 11, word: 'Follow', gujaratiMeaning: 'અનુસરવું', example: 'Follow the instructions carefully.', exampleGujarati: 'સૂચનાઓનું કાળજીપૂર્વક પાલન કરો.' },
    { id: 54, set: 11, word: 'Identify', gujaratiMeaning: 'ઓળખવું', example: 'They identified the cause of the issue.', exampleGujarati: 'તેમણે સમસ્યાનું કારણ ઓળખ્યું.' },
    { id: 55, set: 11, word: 'Track', gujaratiMeaning: 'ટ્રેક કરવું', example: 'We track the progress weekly.', exampleGujarati: 'અમે પ્રગતિનો સાપ્તાહિક ટ્રેક કરીએ છીએ.' },
    
    // Set 12 (id 56-60)
    { id: 56, set: 12, word: 'Allocate', gujaratiMeaning: 'ફાળવવું', example: 'The manager allocated resources for the project.', exampleGujarati: 'મેનેજરે પ્રોજેક્ટ માટે સંસાધનો ફાળવ્યા.' },
    { id: 57, set: 12, word: 'Establish', gujaratiMeaning: 'સ્થાપવું', example: 'The company established a new branch.', exampleGujarati: 'કંપનીએ નવી શાખા સ્થાપી.' },
    { id: 58, set: 12, word: 'Monitor', gujaratiMeaning: 'નિરીક્ષણ કરવું', example: 'The teacher monitored the exam.', exampleGujarati: 'શિક્ષકે પરીક્ષાનું નિરીક્ષણ કર્યું.' },
    { id: 59, set: 12, word: 'Plan', gujaratiMeaning: 'યોજના બનાવવી', example: 'We planned the event carefully.', exampleGujarati: 'અમે કાર્યક્રમની યોજના કાળજીપૂર્વક બનાવી.' },
    { id: 60, set: 12, word: 'Update', gujaratiMeaning: 'અપડેટ કરવું', example: 'She updated the records daily.', exampleGujarati: 'તેણે રેકોર્ડ્સ દરરોજ અપડેટ કર્યા.' },
    
    // Set 13 (id 61-65)
    { id: 61, set: 13, word: 'Attend', gujaratiMeaning: 'હાજરી આપવી', example: 'He attended the seminar yesterday.', exampleGujarati: 'તેણે ગઈકાલે સેમિનારમાં હાજરી આપી.' },
    { id: 62, set: 13, word: 'Communicate', gujaratiMeaning: 'સંચાર કરવો', example: 'They communicated via email.', exampleGujarati: 'તેમણે ઈમેલ દ્વારા સંચાર કર્યો.' },
    { id: 63, set: 13, word: 'Coordinate', gujaratiMeaning: 'સંકલન કરવું', example: 'She coordinated the team’s efforts.', exampleGujarati: 'તેણે ટીમના પ્રયાસોનું સંકલન કર્યું.' },
    { id: 64, set: 13, word: 'Perform', gujaratiMeaning: 'પ્રદર્શન કરવું', example: 'The team performed well in the match.', exampleGujarati: 'ટીમે મેચમાં સારું પ્રદર્શન કર્યું.' },
    { id: 65, set: 13, word: 'Schedule', gujaratiMeaning: 'સમયપત્રક બનાવવું', example: 'We scheduled the meeting for Monday.', exampleGujarati: 'અમે સોમવારે બેઠકનું સમયપત્રક બનાવ્યું.' },
    
    // Set 14: Greetings (id 66-70)
    { id: 66, set: 14, word: 'Hello', gujaratiMeaning: 'નમસ્તે', example: 'She said hello to her friend.', exampleGujarati: 'તેણે પોતાના મિત્રને નમસ્તે કહ્યું.' },
    { id: 67, set: 14, word: 'Goodbye', gujaratiMeaning: 'આવજો', example: 'He waved goodbye to his family.', exampleGujarati: 'તેણે પોતાના પરિવારને આવજો કહીને હાથ હલાવ્યો.' },
    { id: 68, set: 14, word: 'Thank you', gujaratiMeaning: 'આભાર', example: 'She said thank you for the gift.', exampleGujarati: 'તેણે ભેટ માટે આભાર કહ્યો.' },
    { id: 69, set: 14, word: 'Please', gujaratiMeaning: 'કૃપા કરીને', example: 'Please close the door.', exampleGujarati: 'કૃપા કરીને દરવાજો બંધ કરો.' },
    { id: 70, set: 14, word: 'Sorry', gujaratiMeaning: 'માફ કરશો', example: 'He said sorry for being late.', exampleGujarati: 'તેણે મોડું થવા બદલ માફી માંગી.' },
    
    // Set 15 (id 71-75)
    { id: 71, set: 15, word: 'Assess', gujaratiMeaning: 'મૂલ્યાંકન કરવું', example: 'The teacher assessed the students’ work.', exampleGujarati: 'શિક્ષકે વિદ્યાર્થીઓના કામનું મૂલ્યાંકન કર્યું.' },
    { id: 72, set: 15, word: 'Contribute', gujaratiMeaning: 'યોગદાન આપવું', example: 'Everyone contributed to the charity.', exampleGujarati: 'દરેકે ચેરિટીમાં યોગદાન આપ્યું.' },
    { id: 73, set: 15, word: 'Demonstrate', gujaratiMeaning: 'પ્રદર્શન કરવું', example: 'He demonstrated how to use the tool.', exampleGujarati: 'તેણે ટૂલનો ઉપયોગ કેવી રીતે કરવો તે બતાવ્યું.' },
    { id: 74, set: 15, word: 'Organize', gujaratiMeaning: 'આયોજન કરવું', example: 'She organized the files neatly.', exampleGujarati: 'તેણે ફાઇલોને વ્યવસ્થિત રીતે આયોજન કરી.' },
    { id: 75, set: 15, word: 'Support', gujaratiMeaning: 'ટેકો આપવો', example: 'The community supported the initiative.', exampleGujarati: 'સમુદાયે પહેલને ટેકો આપ્યો.' },
    
    // Set 16 (id 76-80)
    { id: 76, set: 16, word: 'Apply', gujaratiMeaning: 'અરજી કરવી', example: 'She applied for a new job.', exampleGujarati: 'તેણે નવી નોકરી માટે અરજી કરી.' },
    { id: 77, set: 16, word: 'Clarify', gujaratiMeaning: 'સ્પષ્ટ કરવું', example: 'The teacher clarified the concept.', exampleGujarati: 'શિક્ષકે ખ્યાલ સ્પષ્ટ કર્યો.' },
    { id: 78, set: 16, word: 'Consult', gujaratiMeaning: 'સલાહ લેવી', example: 'He consulted a lawyer before signing.', exampleGujarati: 'તેણે હસ્તાક્ષર કરતાં પહેલાં વકીલની સલાહ લીધી.' },
    { id: 79, set: 16, word: 'Integrate', gujaratiMeaning: 'સંકલન કરવું', example: 'The system integrates new features.', exampleGujarati: 'સિસ્ટમ નવી સુવિધાઓનું સંકલન કરે છે.' },
    { id: 80, set: 16, word: 'Promote', gujaratiMeaning: 'પ્રોત્સાહન આપવું', example: 'The campaign promotes awareness.', exampleGujarati: 'ઝુંબેશ જાગૃતિને પ્રોત્સાહન આપે છે.' },
    
    // Set 17 (id 81-85)
    { id: 81, set: 17, word: 'Brief', gujaratiPronunciation: 'બ્રીફ', gujaratiMeaning: 'ટૂંકું વર્ણન', example: 'She gave a brief report on the progress.', exampleGujarati: 'તેણીએ પ્રગતિ પર ટૂંકી રિપોર્ટ આપી।' },
    { id: 82, set: 17, word: 'Draft', gujaratiPronunciation: 'ડ્રાફ્ટ', gujaratiMeaning: 'ડ્રાફ્ટ / રૂપરેખા', example: 'He prepared a draft of the letter.', exampleGujarati: 'તેણે પત્રનો ડ્રાફ્ટ તૈયાર કર્યો।' },
    { id: 83, set: 17, word: 'Circulate', gujaratiPronunciation: 'સર્ક્યુલેટ', gujaratiMeaning: 'પ્રસાર કરવું / વહેંચવું', example: 'The notice was circulated to all staff.', exampleGujarati: 'નોટિસ બધાં સ્ટાફમાં વહેંચાઈ હતી।' },
    { id: 84, set: 17, word: 'Share', gujaratiPronunciation: 'શેર', gujaratiMeaning: 'વહેંચવું / રજુ કરવું', example: 'Please share your ideas.', exampleGujarati: 'કૃપા કરીને તમારા વિચારો રજુ કરો।' },
    { id: 85, set: 17, word: 'Observe', gujaratiPronunciation: 'ઓબસર્વ', gujaratiMeaning: 'અવલોકન કરવું', example: 'Teachers observe the students during exams.', exampleGujarati: 'શિક્ષકોએ પરીક્ષા દરમિયાન વિદ્યાર્થીઓનું અવલોકન કરે છે।' },
    
    // Set 18 (id 86-90)
    { id: 86, set: 18, word: 'Present', gujaratiPronunciation: 'પ્રેઝન્ટ', gujaratiMeaning: 'રજૂ કરવું', example: 'He presented his project to the committee.', exampleGujarati: 'તેણે કમિટીને પોતાનો પ્રોજેક્ટ રજૂ કર્યો.' },
    { id: 87, set: 18, word: 'Prioritize', gujaratiPronunciation: 'પ્રાઓરીટીઝ', gujaratiMeaning: 'પ્રાથમિકતા આપવી', example: 'We must prioritize important tasks.', exampleGujarati: 'આપણે મહત્વપૂર્ણ કાર્યોને પ્રાથમિકતા આપવી જોઈએ।' },
    { id: 88, set: 18, word: 'Propose', gujaratiPronunciation: 'પ્રપોસ', gujaratiMeaning: 'પ્રસ્તાવ મૂકવો', example: 'She proposed a new idea.', exampleGujarati: 'તેણીએ એક નવો વિચાર પ્રસ્તાવિત કર્યો.' },
    { id: 89, set: 18, word: 'Record', gujaratiPronunciation: 'રેકોર્ડ', gujaratiMeaning: 'રેકોર્ડ કરવો / નોંધવું', example: 'Please record the video of a dance.', exampleGujarati: 'કૃપા કરીને નૃત્યનો વિડીઓ રેકોર્ડ કરો.' },
    { id: 90, set: 18, word: 'Observe', gujaratiPronunciation: 'ઓબસર્વ', gujaratiMeaning: 'અવલોકન કરવું', example: 'Teachers observe the students during exams.', exampleGujarati: 'શિક્ષકોએ પરીક્ષા દરમિયાન વિદ્યાર્થીઓનું અવલોકન કરે છે।' },
    
    // Set 19 (id 91-95)
    { id: 91, set: 19, word: 'Control', gujaratiPronunciation: 'કન્ટ્રોલ', gujaratiMeaning: 'નિયંત્રણ રાખવું', example: 'The teacher controlled the noisy class.', exampleGujarati: 'શિક્ષકે અવાજ કરતો ક્લાસને નિયંત્રિત કર્યો.' },
    { id: 92, set: 19, word: 'Courage', gujaratiPronunciation: 'કરેઝ', gujaratiMeaning: 'હિંમત', example: 'It takes courage to say sorry.', exampleGujarati: 'માફી માંગવા માટે હિંમત જોઈએ.' },
    { id: 93, set: 19, word: 'Engage', gujaratiPronunciation: 'એન્ગેજ', gujaratiMeaning: 'જોડાવું / વ્યસ્ત રાખવું', example: 'The trainer engaged students in activities.', exampleGujarati: 'ટ્રેનરે વિદ્યાર્થીઓને પ્રવૃત્તિઓમાં જોડ્યા.' },
    { id: 94, set: 19, word: 'Expect', gujaratiPronunciation: 'એક્સપેક્ટ', gujaratiMeaning: 'અપેક્ષા રાખવી', example: 'The teacher expects good results.', exampleGujarati: 'શિક્ષક સારા પરિણામોની અપેક્ષા રાખે છે.' },
    { id: 95, set: 19, word: 'Refer', gujaratiPronunciation: 'રીફર', gujaratiMeaning: 'સંદર્ભ આપવો', example: 'Please refer to the attached file.', exampleGujarati: 'કૃપા કરીને જોડેલી ફાઇલ જુઓ.' },
    
    // Set 20 (id 96-100)
    { id: 96, set: 20, word: 'Register', gujaratiPronunciation: 'રજીસ્ટ્રર', gujaratiMeaning: 'નોંધણી કરવી', example: 'You must register for the event.', exampleGujarati: 'તમારે કાર્યક્રમની નોંધણી કરવી પડશે.' },
    { id: 97, set: 20, word: 'Request', gujaratiPronunciation: 'રીકવેસ્ટ', gujaratiMeaning: 'વિનંતી કરવી', example: 'I request your support in this matter.', exampleGujarati: 'હું આ બાબતમાં તમારો સહયોગ માગું છું.' },
    { id: 98, set: 20, word: 'Schedule', gujaratiPronunciation: 'શેડ્યૂલ', gujaratiMeaning: 'સમયપત્રક / કાર્યક્રમ', example: 'The school published the exam schedule.', exampleGujarati: 'શાળાએ પરીક્ષાનું સમયપત્રક પ્રકાશિત કર્યું.' },
    { id: 99, set: 20, word: 'Measure', gujaratiPronunciation: 'મેઝર', gujaratiMeaning: 'માપવું', example: 'The engineer measured the length.', exampleGujarati: 'એન્જિનિયરે લંબાઈ માપી.' },
    { id: 100, set: 20, word: 'Increase', gujaratiPronunciation: 'ઇનક્રીઝ', gujaratiMeaning: 'વધારો કરવો', example: 'The company increased the salary.', exampleGujarati: 'કંપનીએ પગારમાં વધારો કર્યો.' },
    
    // Set 21 (id 101-105)
    { id: 101, set: 21, word: 'Monitor', gujaratiPronunciation: 'મોનિટર', gujaratiMeaning: 'દેખરેખ રાખવી', example: 'The principal will monitor the exam.', exampleGujarati: 'પ્રિન્સિપાલ પરીક્ષાની દેખરેખ રાખશે.' },
    { id: 102, set: 21, word: 'Motivate', gujaratiPronunciation: 'મોટિવેટ', gujaratiMeaning: 'પ્રોત્સાહિત કરવું', example: 'The coach motivated the players.', exampleGujarati: 'કોચે ખેલાડીઓને પ્રોત્સાહિત કર્યા.' },
    { id: 103, set: 21, word: 'Outline', gujaratiPronunciation: 'આઉટલાઇન', gujaratiMeaning: 'રૂપરેખા આપવી', example: 'He gave an outline of the project.', exampleGujarati: 'તેણે પ્રોજેક્ટની રૂપરેખા આપી.' },
    { id: 104, set: 21, word: 'Prevent', gujaratiPronunciation: 'પ્રિવેન્ટ', gujaratiMeaning: 'રોકવું', example: 'We must prevent accidents at work.', exampleGujarati: 'અમારે કાર્યસ્થળ પર અકસ્માતો રોકવા જોઈએ.' },
    { id: 105, set: 21, word: 'Inspire', gujaratiPronunciation: 'ઇન્સ્પાયર', gujaratiMeaning: 'પ્રેરણા આપવી', example: 'The teacher inspired students to work hard.', exampleGujarati: 'શિક્ષકે વિદ્યાર્થીઓને મહેનત કરવાની પ્રેરણા આપી.' },
    
    // Set 22 (id 106-110)
    { id: 106, set: 22, word: 'Maintain', gujaratiPronunciation: 'મેન્ટેન', gujaratiMeaning: 'જાળવવું', example: 'We must maintain discipline in the office.', exampleGujarati: 'અમારે ઓફિસમાં શિસ્ત જાળવવી જોઈએ.' },
    { id: 107, set: 22, word: 'Introduce', gujaratiPronunciation: 'ઈન્ટ્રોડ્યુસ', gujaratiMeaning: 'પરિચય કરાવવો', example: 'He introduced the guest to the class.', exampleGujarati: 'તેણે મહેમાનનો ક્લાસને પરિચય કરાવ્યો.' },
    { id: 108, set: 22, word: 'Nominate', gujaratiPronunciation: 'નોમિનેટ', gujaratiMeaning: 'પસંદગી કરવી', example: 'He was nominated for the award.', exampleGujarati: 'તેણે એવોર્ડ માટે પસંદ કરવામાં આવ્યો.' },
    { id: 109, set: 22, word: 'Justify', gujaratiPronunciation: 'જસ્ટિફાય', gujaratiMeaning: 'યોગ્ય ઠેરવવું', example: 'You must justify your decision.', exampleGujarati: 'તમારે તમારો નિર્ણય યોગ્ય ઠેરવવો પડશે.' },
    { id: 110, set: 22, word: 'Notify', gujaratiPronunciation: 'નોટિફાય', gujaratiMeaning: 'સૂચિત કરવું', example: 'Please notify me in advance.', exampleGujarati: 'કૃપા કરીને મને પહેલેથી સૂચિત કરો.' },
    
    // Set 23 (id 111-115)
    { id: 111, set: 23, word: 'Identify', gujaratiPronunciation: 'આઈડેન્ટિફાય', gujaratiMeaning: 'ઓળખવું', example: 'The teacher identified the problems.', exampleGujarati: 'શિક્ષકે સમસ્યાઓને ઓળખી.' },
    { id: 112, set: 23, word: 'Decrease', gujaratiPronunciation: 'ડિક્રીઝ', gujaratiMeaning: 'ઘટાડવું, ઓછુ કરવુ', example: 'The temperature will decrease at night.', exampleGujarati: 'રાત્રે તાપમાન ઘટશે.' },
    { id: 113, set: 23, word: 'Overcome', gujaratiPronunciation: 'ઓવરકમ', gujaratiMeaning: 'પાર પામવું', example: 'We must overcome our weaknesses.', exampleGujarati: 'અમારે અમારી કમજોરીઓ પર પાર પામવું જોઈએ.' },
    { id: 114, set: 23, word: 'Express', gujaratiPronunciation: 'એક્સપ્રેસ', gujaratiMeaning: 'વ્યક્ત કરવું', example: 'She expressed her opinion clearly.', exampleGujarati: 'તેણે પોતાની વિચાર સ્પષ્ટ રીતે વ્યક્ત કરી.' },
    { id: 115, set: 23, word: 'Facilitate', gujaratiPronunciation: 'ફેસિલિટેટ', gujaratiMeaning: 'સરળ બનાવવું / સુવિધા આપવી', example: 'The officer facilitated the process.', exampleGujarati: 'અધિકારીએ પ્રક્રિયા સરળ બનાવી.' }
];