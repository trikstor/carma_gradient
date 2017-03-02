// Carma Gradient (by Zotov Anton) http://zotov.online

/* Цвет градиента 1 задается с помощью имени, оно переводится в числовой вариант.
При рассчете числа имени каджая буква заменяется соответствующим числом и все числа суммируются. Затем, если в результате получилось число больше девяти, то суммируются все его цифры. Эту операцию повторяют пока не получится число от одного до девяти. */
class color_1 {
	constructor(name){
		this.name = name;
	}
	value_name(this.name){
		var low_name = this.name.toLowerCase();
		var n = 0;
		var alphabet = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т',
		'у','ф','х','ц','ч','щ','ш','ь','ы','ъ','э','ю','я'];
		for(var i = 0; i < low_name.length; i++){
			n = 0;
			while(low_name[i] != alphabet[n]){
				n++;
			}
			low_name[i] = n;
		}
}
/* Цвет градиента 2 задается датой рождения.
Для того, чтобы рассчитать кармическое число по дате рождения, следует последовательно сложить все числа, которые в ней присутствуют.*/
class color_2 {
	constructor(date_of_brith){
		this.date_of_brith = date_of_brith;
	}
	value_date_of_brith(this.date_of_brith){
		var d_br = this.date_of_brith;
		d_br = d_br+'.';
		var n = 0;
		var m = 0;
		var i = 0;
		var sum;
		while(i < 4){
			while(d_br[n] != '.'){
				n++;
			}
			sum += d_br.substring(m,n-1);
        	m = n-1;
			i++;
		}
	}
}
