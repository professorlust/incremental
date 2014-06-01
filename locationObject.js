var button;
var oldButtons ='';

function locationInfo() {
	this.questText = 'A default text display here',
	this.ascii = '',
	this.text = '',
	this.buttons = '-',
	this.name = '',
	this.specButtons = '',
	this.animateInterval = 500,
	this.animate = false,
	this.createLocButton = function(buttonClass, to, from, type) {
		this.buttons = '<button class = "' + buttonClass + '"' + ' value = "' + to + ',' + from + '">' + type + '</button>';
		this.displayButton();
	}
	this.displayButton = function() {
		console.log(oldButtons);
		$('#testLoc').html(this.buttons + oldButtons);
		oldButtons = this.buttons +''+ oldButtons;
		console.log(this.buttons);
	}
	this.createSelect = function() {
		this.select = '<select id = "' + questId + '">';
	}
$('.location_button, pre').click(function() {
		var buttonValue = $(this).attr('value');
		var split = buttonValue.split(',');
		console.log('test');
		$('#' + split[1]).hide();
		$('#' + split[0]).fadeIn('slow');
		if (split[0] == 'mountain') {
			magicDoor();
		}
		else if (split[0] == 'trainShow') {
			trainTicket();
		}
		else if (split[0] == 'store') {
			$('#store_status').html('You looking to buy?');
		}
		else if (split[0] == '#inventory') {
			inventoryList();
		}
		error.innerHTML = '';
	});
}
var animateRecurse;
function animateAscii(location) {
	if (location != undefined){
	animateRecurse = location;
	$('#location_ascii2').html(location.ascii2);
	}
	if (animateRecurse.animate = true) {
	$('#location_ascii').toggle();
	$('#location_ascii2').toggle();
	
	setTimeout(animateAscii, animateRecurse.animateInterval);
	}
	else {
		return;
	}
}

var Store = new locationInfo();
Store.animate = true;
Store.animateInterval = 10000;
Store.ascii = "\n\
      ////^\\\\\\\\\n\
      | ^   ^ |\n\
     @ (o) (o) @\n\
      |   v   |\n\
      |  ___  |\n\
       \\_____/\n\
     ____|  |____\n\
    /    \\__/    \\\n\
   /              \\\n\
  /\\_/|        |\\_/\\\n\
 / /  |        |  \\ \\\n\
(  |  |        |   > )\n\
 \\ \\  |        |  / /\n\
  \\ \\ |________| / /\n\
   \\ \\|_I_D_I__|/ /\n\
    \\ \\ / I  \\ / /\n\
     \\ /  I   \\ /\n\
     |         |\n\
     |    |    |\n\
     |    |    |\n\
     |    |    |\n\
     |    |    |\n\
     | ## | ## |\n\
     |    |    |\n\
     |    |    |\n\
     |____|____|\n\
     (____(____)\n\
      _| | _| |\n\
  cccC__Cccc___)\n\ ";

Store.ascii2 = "\n\
      ////^\\\\\\\\\n\
      | ^   ^ |\n\
     @ -=- -=- @\n\
      |   v   |\n\
      |  ___  |\n\
       \\_____/\n\
     ____|  |____\n\
    /    \\__/    \\\n\
   /              \\\n\
  /\\_/|        |\\_/\\\n\
 / /  |        |  \\ \\\n\
(  |  |        |   > )\n\
 \\ \\  |        |  / /\n\
  \\ \\ |________| / /\n\
   \\ \\|_I_D_I__|/ /\n\
    \\ \\ / I  \\ / /\n\
     \\ /  I   \\ /\n\
     |         |\n\
     |    |    |\n\
     |    |    |\n\
     |    |    |\n\
     |    |    |\n\
     | ## | ## |\n\
     |    |    |\n\
     |    |    |\n\
     |____|____|\n\
     (____(____)\n\
      _| | _| |\n\
  cccC__Cccc___)\n\ ";

Store.text = 'You looking to buy?';
Store.special = '#store_special';

var Church = new locationInfo();
Church.text = 'You walk into the church and it is very dark inside, there is a figure behind the podium yet no sign of anyone else';
Church.special = '#church_special';
Church.ascii = '\n\
          	  ____                                               ____\n\
       . |       /====\\         ||                       ||         /====\\\n\
      .  |       |====|        =**=          _          =**=        |====|\n\
     .   |       |====|         ||         _( )_         ||         |====|\n\
    .    |                      ||        /_____\\        ||\n\
   .     |                 _______________\\|   |/__________________\n\
  .      |_______ ________/                | + |                  /____ _____\n\
 .      .       _U_      /                 |___|                 //   _U_\n\
       .         |      /_______________________________________//     |\n\
      .         /|\\     |______________________________________|/     /|\\\n\
     .   (=========================)     .      . (==========================)\n\
    .    |                         |/|  .       . |                          |\n\
   .     |                         | | .        . |                          |\n\
  .      |_________________________|/|.         . ||------------------------||\n\
     (=========================)  || .          . (==========================|\n\
     |                         |/|  .           . |                          |\n\
     |                         | | .            . |                          |\n\
     |_________________________|/|.             . ||------------------------||\n\
 (=========================)  || .              . (==========================)\n\
 |                         |/|  .               . |                          |\n\
 |                         | | .                . |                          |\n\
 |_________________________|/|.                 . | ________________________ |\n\
 |                        || .                  . ||   -Steve Stewart-      || \n\ ';


var Camp = new locationInfo();
Camp.text = 'The fire is burning calmy but no one is around';
Camp.special = '#camp_special'
Camp.ascii = '             |\n\
                          /^\\\n\
                         / : \\             (  (   )\n\
                        /  :  \\           (          )\n\
                       / / : \\ \\        (    (   )  )\n\
    (  )  (  )        /  / :  \\ \\         ( (   )  )  )\n\
   (   ( (    )      / .   : \'   \\\n\
     (   ( )   )    / .   .:  \'   \\                           .\n\
      ( (   )      /   / . :  .    \\                                  .\n\
                  /        :   .    \\                            .\n\
                 /         :    .    \\               .\n\
                /   /  ,   :        \\ \\      .                \'    .  \'\n\
               /      ,    :           \\                  .    .      .\n\
              /            :    \\     . \\  `    .     \'      `\n\
             /   ,     /   :     \'     . \\        \' .          \'  .  \'  \'\n\
            /   ,     \'    :  .   \\     . \\   ,   ,                 .\n\
           /   ,     ,  /  :   ,   \\       \\         \'    .  .` )     ,\n\
          /   /   / ,      |    \\   \'   \\   \\    ,      .       (   )\n\
         /         ,  /    |\\        \'   `   \\                ( ) ( (\n\
        /    ,       /  /  | \\    \\       \\   \\       .     (  ( (   )\n\
       / .             /   |    \\  \\    \\      \\   ,     , \'  .( ) ) (\n\
     .`|.  ,    /          |         \\      \\   |\'.            )( ( ((, )\n\
   .`  /  ,  / /           |          \\    ,    \\  \'.          ))/)\))(\n\
_.`   / _,  /_/        /   |     \\     \\_    \\_  \\   \'.         //\\)\\\\_\n\
\\_,._/_/_\\__/____\\_________|____________\\___/_\\__|_),_/_._____//_/\\\\_\\\\__,_,._\n\
  `\' \'`  ~ \"\'` ^~~^\'`   ~^  \'~~^\'   ^^~~\' \'~~~   `\'\'  \'`  ~\'~~"" \'^"""\'\' ~~ ^"\n\
Artur Gawronski\n\ ';

var Pool = new locationInfo();
Pool.text = 'There is a pool of water which reflects everything.  Do you look into it?'
Pool.ascii = '                %%%\;       *                      *\n\
   |  %%%\;     %%%~%%%\;               .                     .     *\n\
 # |__/__%%%____/_/~%\;%                           .\n\
     ___%%\;______%%\;%          .            *            *\n\
\" \" /~ %-//  \\ \\__%#%%_-%%\;`\n\
   |  ~%-/_%` \\ \\_/%%#%%`                                            .\n\
#  | %%%#%     \\__/%%#%%\;%`,\n\
  \"| \;%%%\;`                              *                  .\n\
   |                            *                  (\n\
| #|            *        .                                          .\n\
  ||         .                        . .        .\n\
   |                .                ` \' `               *\n\
#  |                             .\'\'\'. \' .\'\'\'.                   *\n\
  \"|  *           .                .. \' \' ..      .\n\
\'  |                         *    \'  \'.\'.\'  \'              .\n\
   |                              .\'\'\'.\'.\'\'\'.\n\
 \" |       .----------.          \' .\'\'.\'.\'\'. \'\n\
   |       |__________|            . . : . .\n\
   |_{}_{}/|__________|\\{}_{}_{} _\'___\':\'___\'_ {}_{}_{}_{}_{}_{}_{}_{}\n\
\' #| || ||/____________\\|| || ||(_____________)|| || || || || || || ||\n\
lc\'\\\"\"\"\"\"\"||          ||\"\"\"\"\"\"\"\"\"\"\"\"(     )\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\n\
\"\"\"\"\"     |            |            _)   (_             .^-^.  ~\"\"~\n\
                         ~\"\"~      (_______)~~\"\"\"~~     \'._.\'\n\
    ~~\"\"~~                     ~\"\"~                     .\' \'.\n\
                                                        \'.,.\'\n\
                                                           `\'`\'\'\n\ ';


var PoolInside = new locationInfo();
PoolInside.text = 'You look into the pool, it offers you one reflection on yourself';
PoolInside.ascii = '\n\
\n\
                      .      .       .       .\n\
  .   .       .          .      . .      .         .          .    .\n\
         .       .         .    .   .         .         .            .\n\
    .   .    .       .         . . .        .        .     .    .\n\
 .          .   .       .       . .      .        .  .              .\n\
      .  .    .  .       .     . .    .       . .      .   .        .\n\
 .   .       .    . .      .    . .   .      .     .          .     .\n\
    .            .    .     .   . .  .     .   .               .\n\
     .               .  .    .  . . .    .  .                 .\n\
                        . .  .  . . .  . .\n\
                            . . . . . .\n\
                              . . . .\n\
                               I . I\n\
                 _______________III_______________\n\
                /    .       .       .       .    \\n\
               ( ~~~ .  ~~~  .  ~~~  .  ~~~  . ~~~ )\n\
                 \\SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS/\n\
                    \\ ======================= /\n\
                        \\SSSSSSSSSSSSSSSSS/\n\
                     ________\\       /________\n\
                    (=+=+=+=+=+=+=+=+=+=+=+=+=)\n\
                     ~~~~~~~~~~~~~~~~~~~~~~~~~\n\ ';


var Tower = new locationInfo();
Tower.text ='You are at the base of the tower, noise is coming from inside';
Tower.ascii = '\n\
                          .- ._          *\n\
                 .       (   ) `) ._,--.\n\
          _.-.          (      .\' | af }      ._    +\n\
        .\'     )         `(_\'-\'   |--\'\"        ))        |\n\
       (   _.   )                 |           \'\"       - * -\n\
      .-.-\'  )  _)  .        [\"I\"I\"I\"I\"}   .             .\n\
     (  `   .)`\'              I_I_I_I_I\n\
      `-. (   )          [UUUUI_I_I_I_I\n\
         `-..\'            |[__I_I_[#]_I .        .\n\
                   +      |__[I_I_I\=I_I\n\
         .       .        |]_ I_[#]-I_I              \;\n\
                          |_[ I_I\=I_I_[,   \n\
                          |__ I_I_I%I_I  \n\
                          |[ _$_I_I%%_I  \n\
                          | [ %%I_g%%_I           __a:f\n\
          ---..-----.--,,\'|]_ %_Ia%%I_I ----\;.------\"\"\n\
                      ((  |_[ $%I%%_!^!       +\n\
                       )) |[_ |%.%I_|"|    n Am   n\n\
             .-     _ \'/  |_ / _Y_)_|`| -    _        n\n\
         ._.\'        `- _.--\'`\'  \' \"|\=\ \'\'    `-.\n\
                      .\'             |\=\`-._     `\n\
                   .-\'                  `:.  `---....__\n\
                                           `\n\ ';

var Monk = new locationInfo();
Monk.text = '';
Monk.ascii = '                          \n\
                                .---.\n\
                               /\" \" \"\\n\
                              (| -_- |)\n\
                               \\  =  /\n\
                           ____/`---\'\____\n\
                         .\'  \\\\|     |//  `.\n\
                        /  \\\\|||  :  |||//  \\n\
                       /  _||||| -:- |||||_  \\n\
                       |   | \\\\\\  -  /\'| |   |\n\
                       | \\_|  `\\`---\'//  |_/ |\n\
                       \\  .-\\__ `-. -\'__/-.  /\n\
                     ___`. .\'  /--.--\  `. .\'___\n\
                  .\"\" \'<  `.___\_<|>_/___.\' _> \\\"\".\n\
                 | | :  `- \`. ;`. _/\; .\'/ /  .\' \; |\n\
                 \  \ `-.   \_\_`. _.\'_/_/  -\' _.\' /\n\
==================`-.`___`-.__\ \___  /__.-\'_.\'_.-\'=====================\n\
                               `=--=-\'                    hjw\n\ ';


var DemonWizardElder = new locationInfo();
DemonWizardElder.text = 'Hello, I am the Demon Wizard Elder, I can grant you amazing power, for a price of course.  Choose your sin, but remember, you can only choose one.';
DemonWizardElder.ascii = '\n\
    ,-----.\n\
   ( <> <> )\n\
    )_ W _(\n\
     |||||    A A A\n\
      |||     | | |\n\
   __/)\'(\__  `-+-\'\n\
  /\\\\     //\\   |\n\
 | |\\\\___//\\ \\  |\n\
 | |/\\\\_//\\ \\ \\ |\n\
 | ||\\\\_//|  \\ \\|\n\
 | ||/\\_/\\|   \\ |\n\
 | |/ /|\\ \\    \\_)\n\
 (_/  \\_/  \\    K\n\
   |  | |  |    R\n\
   |  | |  |    O\n\
   |()| |()|    G\n\
   |  | |  |    G\n\
   |  | |  |    9\n\
   |__| |__|    8\n\
   \\__/ \\__/    V\n\ ';


var Mountain = new locationInfo();
Mountain.text = '';
Mountain.ascii = '\n\
                      (_,.-      _,-\'_,-----------._`-._    _)_)\n\
                         |     ,\'_,-\'  ___________  `-._`.\n\
                        `\'   ,\',\'  _,-\'___________`-._  `.`.\n\
                           ,\',\'  ,\'_,-\'     .     `-._`.  `.`.\n\
                          /,\'  ,\',\'        >|<        `.`.  `.\\\n\
                         //  ,\',\'      ><  ,^.  ><      `.`.  \\\\\n\
                        //  /,\'      ><   / | \   ><      `.\\\\  \\\\\n\
                       //  //      ><    \\/\\^/\\/    ><      \\\\  \\\\\n\
                      \;\;  \;\;              `---\'              ::  ::\n\
                      ||  ||              (____              ||  ||\n\
                     _||__||_            ,\'----.            _||__||_\n\
                    (o.____.o)____        `---\'        ____(o.____.o)\n\
                      |    | /,--.)                   (,--.\\ |    |\n\
                      |    |((  -`___               ___`   ))|    |\n\
                      |    | \\\\,\'\',  `.           .\'  .``.// |    |\n\
                      |    |  // (___,\'.         .\'.___) \\\\  |    |\n\
                     /|    | \;\;))  ____) .     . (____  ((\\\\ |    |\\\n\
                     \\|.__ | ||/ .\'.--.\\/       `/,--.`. \\\;: | __,|\;\n\
                      |`-,`\;.| :/ /,\'  `)-\'   `-(\'  `.\\ \\: |.\;\',-\'|\n\
                      |   `..  \' / \\__.\'         `.__/ \\ `  ,.\'   |\n\
                      |    |,\\  /,                     ,\\  /,|    |\n\
                      |    ||: : )          .          ( : :||    |\n\
                     /|    |:\; |/  .      ./|\\,      ,  \\| :\;|    |\\\n\
                     \\|.__ |/  :  ,/-    <--:-->    ,\\.  ;  \\| __,|\;\n\
                      |`-.``:   `\'/-.     \'\\|/`     ,-\\`\;   \;\'\',-\'|\n\
                      |   `..   ,\' `\'       \'       `  `.   ,.\'   |\n\
                      |    ||  :                         :  ||    |\n\
                      |    ||  |                         |  ||    |\n\
                      |    ||  |                         |  ||    |\n\
                      |    |\'  |            _            |  `|    |\n\
                      |    |   |          \'|))           |   |    |\n\
                      \;____:   `._        `\'           _,\'   \;____:\n\
                     {______}     \\___________________/     {______}\n\
                 SSt |______|_______________________________|______|\n\ ';


var Main = new locationInfo();
Main.special = '#main_special';

var Factory = new locationInfo();
Factory.special = '#factory_special';

var Inventory = new locationInfo();
Inventory.special = '#inventory_special';



var locationObject = {
	Church: Church,
	Store: Store,
	Main: Main,
	DemonWizardElder: DemonWizardElder,
	Pool: Pool,
	PoolInside: PoolInside,
	Monk: Monk,
	Tower: Tower,
	Camp: Camp,
	Factory: Factory,
	Inventory: Inventory
}