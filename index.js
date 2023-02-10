$('#infoContainer').append(`<p id='introText1' class='text-start fs-4 mb-5'></p>`);
$('#introText1').text(`Welcome to The Adventurer's Hearth, the inn on the side of the road to wherever your headed that every adventure seems to start. Gather friends and peruse the topics here in our library, then get started on an adventure of your own!`)
$('#infoContainer').append(`<p id='introText2' class='text-start fst-italic fs-5 mb-5'></p>`);
$('#introText2').text(`On the left side of your screen, you'll see a navigation bar that will spirit you away to whatever topic you wish to learn more about. All material is referenced from the official Dungeons and Dragons 5th Edition System Reference Document (SRD 5.1) and covered by the Open-Gaming License (OGL 1.0a). At the top of the page, you'll find links that travel across the multiverse to libraries on different planes of existence- even some with knowledge we've never seen!`)
$('#infoContainer').append(`<img id='introImage' src='https://images.alphacoders.com/110/thumb-1920-1107087.jpg' class='img-fluid rounded-3 border border-black shadow'></p>`);

$('#charStatsBody').on('click', function() {
    let eventTarget = event.target;
    let eventString = eventTarget.getAttribute('id').toString();
    let eventSelector = eventString[0]+eventString[1]+eventString[2]
    getStats(eventSelector);
}) 

function getStats(string) {
    let statSearcher = string[0]+string[1]+string[2];
    console.log(statSearcher);
    $('#infoContainer').remove();
    $('#infoBox').append(`<div id='infoContainer' class='d-inline-block bg-secondary-subtle border border-secondary rounded-4 align-top w-75 ms-5 p-5'></div>`);
    $('#infoContainer').append(`<p id='statName' class='display-3 fw-bold text-center fst-italic mb-4'></p>`);
    $('#infoContainer').append(`<p id='statInfo1' class='text-center fs-3 mx-5'></p>`);
    $('#statInfo1').after(`<p id='statInfo2' class='fw-light text-center fst-italic fs-5 mx-5'></p>`);

    $.get(`https://www.dnd5eapi.co/api/ability-scores/${statSearcher}`, (data) => {
        console.log(data);
        let statName = data.full_name;
        let statInfo1 = data.desc[0];
        let statInfo2 = data.desc[1];
        $('#statName').text(statName);
        $('#statInfo1').text(statInfo1);
        $('#statInfo2').text(statInfo2);
    })
}

$('#playerClassBody').on('click', function() {
    let eventTarget = event.target;
    let eventString = eventTarget.getAttribute('id').toString();
    getClasses(eventString);
}) 

function getClasses(string) {
    // let statSearcher = string[0]+string[1]+string[2];
    console.log(string);
    $('#infoContainer').remove();
    $('#infoBox').append(`<div id='infoContainer' class='d-inline-block bg-secondary-subtle border border-secondary rounded-4 align-top w-75 ms-5 mb-5 p-5'></div>`);
    $('#infoContainer').append(`<p id='className' class='display-3 fw-bold text-center fst-italic mb-4'></p>`);
    $('#infoContainer').append(`<p id='classDesc' class='text-start fw-light fst-italic fs-4 mb-5'></p>`);
    $('#infoContainer').append(`<p id='hitDie' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='hitDie1st' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='hitDieAfter' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='profArmor' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='profWeapons' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='profTools' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='profSaves' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='profSkills' class='fw-light fs-3'></p>`);
    $.get(`https://api.open5e.com/classes/`, (data) => {
        console.log(data);
        let className = '';
        let classDesc = '';
        let hitDie = '';
        let hitDie1st = '';
        let hitDieAfter = '';
        let profArmor = '';
        let profWeapons = '';
        let profTools = '';
        let profSaves = '';
        let profSkills = '';
        for (let i=0;i<data.results.length;i++) {
            if (data.results[i].name == string) {
                className = data.results[i].name;
                classDesc = descObj[string];
                hitDie = data.results[i].hit_dice;
                hitDie1st = data.results[i].hp_at_1st_level;
                hitDieAfter = data.results[i].hp_at_higher_levels;
                profArmor = data.results[i].prof_armor;
                profWeapons = data.results[i].prof_weapons;
                profTools = data.results[i].prof_tools
                profSaves = data.results[i].prof_saving_throws;
                profSkills = data.results[i].prof_skills;
            }
        }
        $('#className').text(className);
        $('#classDesc').html(classDesc);
        $('#hitDie').html(`<b>Hit Dice:</b> ${hitDie}`);
        $('#hitDie1st').html(`<b>Hit Points at 1st Level:</b> ${hitDie1st}`);
        $('#hitDieAfter').html(`<b>Hit Points at Higher Levels:</b> ${hitDieAfter}`);
        $('#profArmor').html(`<b>Armor Proficiences:</b> ${profArmor}`);
        $('#profWeapons').html(`<b>Weapon Proficiences:</b> ${profWeapons}`);
        $('#profTools').html(`<b>Tool Proficiences:</b> ${profTools}`);
        $('#profSaves').html(`<b>Saving Throw Proficiences:</b> ${profSaves}`);
        $('#profSkills').html(`<b>Skill Proficiences:</b> ${profSkills}`);
    })
}

$('#playerRaceBody').on('click', function() {
    let eventTarget = event.target;
    let eventString = eventTarget.getAttribute('id').toString();
    getRaces(eventString);
}) 

function getRaces(string) {
    console.log(string);
    $('#infoContainer').remove();
    $('#infoBox').append(`<div id='infoContainer' class='d-inline-block bg-secondary-subtle border border-secondary rounded-4 align-top w-75 ms-5 mb-5 p-5'></div>`);
    $('#infoContainer').append(`<p id='raceName' class='display-3 fw-bold text-center fst-italic mb-4'></p>`);
    $('#infoContainer').append(`<p id='abilityBonus' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='age' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='align' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='size' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='speed' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='langDesc' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='traits' class='fw-light fs-3'></p>`);
    $.get(`https://www.dnd5eapi.co/api/races/${string}`, (data) => {
        console.log(data);
        let raceName = data.name;
        let mainAbilityBonus = data.ability_bonuses[0].ability_score.name;
        let abilityBonusNum1 = data.ability_bonuses[0].bonus.toString();
        let secondAbilityBonus = '';
        let abilityBonusNum2 = '';
        let align = data.alignment;
        let languageDesc = data.language_desc;
        let size = data.size;
        let sizeDesc = data.size_description;
        let speed = data.speed.toString()
        let age = data.age;
        let traits = '';
        if (data.ability_bonuses[1] !== undefined) {
            secondAbilityBonus = data.ability_bonuses[1].ability_score.name;
            abilityBonusNum2 = data.ability_bonuses[1].bonus.toString();
        }
        if (data.ability_bonuses.length > 2) {
            mainAbilityBonus = 'Your ability scores each increase by'
        }
        if (data.traits.length === 0) {
            traits += `None`
        }
        for (let i=0;i<data.traits.length;i++) {
            if (i == 0 && data.traits.length !== 0) {
                traits += data.traits[i].name;
            } else {
                traits += `, ${data.traits[i].name}`;
            }
        }
        $('#raceName').html(raceName);
        if (raceName == 'human' || abilityBonusNum2 == '') {
            $('#abilityBonus').html(`<b>Ability Score Increase:</b> ${mainAbilityBonus} +${abilityBonusNum1}.`);
        } else {
            $('#abilityBonus').html(`<b>Ability Score Increase:</b> ${mainAbilityBonus} +${abilityBonusNum1}, ${secondAbilityBonus} +${abilityBonusNum2}.`);
        }
        $('#age').html(`<b>Age:</b> ${age}`);
        $('#align').html(`<b>Alignment:</b> ${align}`);
        $('#size').html(`<b>Size:</b> ${size}. ${sizeDesc}`);
        $('#speed').html(`<b>Speed:</b> Your base walking speed is ${speed} feet.`);
        $('#langDesc').html(`<b>Languages:</b> ${languageDesc}`);
        $('#traits').html(`<b>Racial Traits:</b> ${traits}.`);
    })
}

$('#alignment').on('click', function() {
    let eventTarget = event.target;
    let eventString = eventTarget.getAttribute('id').toString();
    getAlignments(eventString);
}) 

function getAlignments(string) {
    console.log(string);
    $('#infoContainer').remove();
    $('#infoBox').append(`<div id='infoContainer' class='d-inline-block bg-secondary-subtle border border-secondary rounded-4 align-top w-75 ms-5 mb-5 p-5'></div>`);
    $('#infoContainer').append(`<p id='alignment' class='display-3 fw-bold text-center fst-italic mb-4'>Alignments</p>`);
    $('#infoContainer').append(`<p id='lawful-good' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='neutral-good' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='chaotic-good' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='lawful-neutral' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='neutral' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='chaotic-neutral' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='lawful-evil' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='neutral-evil' class='fw-light fs-3'></p>`);
    $('#infoContainer').append(`<p id='chaotic-evil' class='fw-light fs-3'></p>`);

    $.get(`https://www.dnd5eapi.co/api/alignments/lawful-good`, data => {
        let lawfulGood = data.desc;
        $('#lawful-good').html(`<b>${data.name}</b> - ${lawfulGood}`);
    })
    $.get(`https://www.dnd5eapi.co/api/alignments/neutral-good`, data => {
        let neutralGood = data.desc;
        $('#neutral-good').html(`<b>${data.name}</b> - ${neutralGood}`);
    })
    $.get(`https://www.dnd5eapi.co/api/alignments/chaotic-good`, data => {
        let chaoticGood = data.desc;
        $('#chaotic-good').html(`<b>${data.name}</b> - ${chaoticGood}`);
    })
    $.get(`https://www.dnd5eapi.co/api/alignments/lawful-neutral`, data => {
        let lawfulNeutral = data.desc;
        $('#lawful-neutral').html(`<b>${data.name}</b> - ${lawfulNeutral}`);
    })
    $.get(`https://www.dnd5eapi.co/api/alignments/neutral`, data => {
        let neutr = data.desc;
        $('#neutral').html(`<b>${data.name}</b> - ${neutr}`);
    })
    $.get(`https://www.dnd5eapi.co/api/alignments/chaotic-neutral`, data => {
        let chaoticNeutral = data.desc;
        $('#chaotic-neutral').html(`<b>${data.name}</b> - ${chaoticNeutral}`);
    })
    $.get(`https://www.dnd5eapi.co/api/alignments/lawful-evil`, data => {
        let lawfulEvil = data.desc;
        $('#lawful-evil').html(`<b>${data.name}</b> - ${lawfulEvil}`);
    })
    $.get(`https://www.dnd5eapi.co/api/alignments/neutral-evil`, data => {
        let neutralEvil = data.desc;
        $('#neutral-evil').html(`<b>${data.name}</b> - ${neutralEvil}`);
    })
    $.get(`https://www.dnd5eapi.co/api/alignments/chaotic-evil`, data => {
        let chaoticEvil = data.desc;
        $('#chaotic-evil').html(`<b>${data.name}</b> - ${chaoticEvil}`);
    })
}



let descObj = {
    Barbarian: '<p>People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one’s own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.<br><br>Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.</p>',
    Bard: '<p>In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.<br><br>The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge.</p>',
    Cleric: '<p>Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don’t grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling. Harnessing divine magic doesn’t rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity’s wishes.<br><br>Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.</p>',
    Druid: '<p>Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.<br><br>Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form.</p>',
    Fighter: '<p>Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.<br><br>Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike.</p>',
    Monk: '<p>Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.<br><br>Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies’ physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.</p>',
    Paladin: '<p>A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin’s power comes as much from a commitment to justice itself as it does from a god.<br><br>Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice.</p>',
    Ranger: '<p>Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.<br><br>Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature’s power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger’s talents and abilities are honed with deadly focus on the grim task of protecting the borderlands.</p>',
    Rogue: '<p>Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.<br><br>When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities.</p>',
    Sorcerer: '<p>Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled magic within them, a chaotic storm that manifests in unexpected ways.<br><br>Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power.</p>',
    Warlock: '<p>A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron’s behalf.<br><br>The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock’s being (such as the ability to see in darkness or to read any language) to access to powerful spells. Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons.</p>',
    Wizard: '<p>Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.<br><br>Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.</p>'
}