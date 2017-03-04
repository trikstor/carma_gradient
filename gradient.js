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
		var sum = 0;
		var alphabet = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т',
		'у','ф','х','ц','ч','щ','ш','ь','ы','ъ','э','ю','я'];
		for(var i = 0; i < low_name.length; i++){
			n = 0;
			while(low_name[i] != alphabet[n]){
				n++;
			}
			low_name[i] = n;
		}
		for(var i = 0; i < low_name.length; i++){
			sum += low_name[i];
		}
		return sum;
	}
}
/* Цвет градиента 2 задается датой рождения.
Для того, чтобы рассчитать кармическое число по дате рождения, следует последовательно сложить все числа, которые в ней присутствуют.*/
class color_2 {
	constructor(date_of_brith){
		this.date_of_brith = date_of_brith;
	}
	value_date_of_brith(this.date_of_brith){
		var temp_sum;
		var d_br = this.date_of_brith;
		d_br = d_br+'.';
		var n = 0;
		var m = 0;
		var i = 0;
		var sum = 0;
		while(i < 4){
			while(d_br[n] != '.'){
				n++;
			}
			if(d_br.substring(m,n-1) == 10){
				sum += d_br.substring(m,n-1);
			} else {
				temp_sum = d_br.substring(m,n-1);
				for(var p = 0; p < temp_sum.length; p++){
					sum += temp_sum[i];
				}
			}
        		m = n-1;
			i++;
		}
		return sum;
	}
}
/* Конвертирует полученные числа в код HSL */
class convert_color {
	constructor(val1, val2){
		this.val1 = val1;
		this.val2 = val2;
		this.val3 = val2/val1;
	}
	get hsl_color() {
		return `${this.val1} ${this.val2} ${this.val3}`;
	}
  	set hsl_color(newValue) {
    		[this.val1, this.val2, this.val3] = ['hsl('+this.val1, this.val2+'%', this.val3+'%)'];
		[this.val1, this.val2, this.val3] = newValue.split(', ');
  	}
}
