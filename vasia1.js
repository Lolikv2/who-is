function zoom() { risl.height="600"; }
function nozoome() {risl.height="300";}
function time1() {
mes=new Array("������ ","������� ","����� ", "������ ","��� ","���� ","���� " , "������� ","�������� ","������� ", "������ ","������� ");
day=new Array("�����������, ","�����������, ","�������, ","�����, ","�������, ","�������, ","�������, ")
d=new Date();
if (d.getHours()<10)(hors="0"+ d.getHours());else(hors=d.getHours())
if (d.getMinutes()<10)(min="0"+ d.getMinutes());else(min=d.getMinutes())
stroka1.innerText="������� - "+ day[(d.getDay())] + d.getDate()+"-� "+ mes[(d.getMonth())] + (d.getYear()-(1900*-1)) + "-��� ����, " + " ������ - "+ hors +":"+ min;}
function test() { if (sekr.value=="3214")(window.location="Tank_5.htm")}
function mod1() {
mod=new Array("��-1 ���� �������� ������������. �� ���������� � ���� ���� ����� �-11. ��� ������� ���������� �-2�. �������� ����� �������� � ���� 71-��-3.","��-2 ���� 152-�� �������� �������. ��-2 �������������� ��� ������� ������ ����������� �������������� ����� (���������� ��������� ������ �������� ����� � ������). ��� ������� ������������� V-�������� 12-����������� ��������� ���������� �-2� ��������� 500 �. �. �������� ����� �������� � ���� ��������������� ������������ 71-��-3 � ���������� ������������ ���������� ���-4-��� �� 4 ��������.","��-3 ���� 107-�� ��������������� ����� ���-6. �� ����� ��������� ��������� ��������� �-2��. ������������ ��������.");
kart=new Array("IMG/kv-1.jpg","IMG/��-2.jpg","IMG/kv-3.jpg")
risl.src=kart[op1.value]
stroka1.innerText=mod[op1.value];

}
function tak(num) {risl.src="IMG/1/t" + num + ".jpg";}
function mod2() {
mad=new Array("�-34 1941� ����  76-�� ����� ������� 1938/39 ����� (�-11). �� ���� ������������ �-34 �������������� V-�������� 12-����������� ������������� ������������ ��������� ��������� ����������� ���������� �� �������� ����������� ������� � ����������� ����������������� ���������� (DOHC), ������ �-2-34. �� �-34 ������ ����� ��������������� ��������������� ���������� ������������ 71-��-3, ������ ���������� �� ����� ����� 9-�.","�-34 1942� ���� 76-�� ����� ������� 1940 �. (�-34). ��������� ���-�� �������� ������ ��. ���������� ����� �����, ��-�� ���� ���� ���� �������� ������ ��������: � 77 �� 100.","�-34-57 ���� 57-�� ������� ��������������� ����� ���-2 (���-4, ���-4�). ����������� ���������� �� 150 ���������. ��������� ���-�� �������� ������ ��.");
kort=new Array("IMG/T-34.jpg","IMG/T-34-57_.jpg","IMG/T-34-76.jpg");
risl.src=kort[op2.value]
stroka2.innerText=mad[op2.value];
}
function mod3() {
mak=new Array("������ ������� ��, �� ���� � ������� �����. ���������� � 1931�32 ��. ������� 37-�� ������ � �������� ��. ������ � 2 ���.","��������� ������������, � ���������� (45-�� ����� � ������ ��; �� ��������� ������ ��� ������ �� � ���� �����, �� ��������� � ��� � �������� ��). ������ � 3 ���. ����������� � �������� ��������� ����� � ������������� (� ������).","(������������ ������ ����������� ��-8): ��������� ��������� �-2. ����� ��������� ���������� ��������� �� ����� ���� ��������� ��������� �����������, ������ ���� � �������� �������� ��������� ��� ������������ � ������ ������������.");
kert=new Array("IMG/BT-2.jpg","IMG/bt-5-45.jpg","IMG/BT-7M.jpg");
risl.src=kert[op3.value]
stroka3.innerText=mak[op3.value];
}
function C2F() { grad=prompt("����� ��� ���","��, �����, ����");
itog2.innerText="� ����� ����� ����, " + grad;
}