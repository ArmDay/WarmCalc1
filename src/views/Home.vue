<template>
 <div>
  <form>
<div>
    <div class="row"> 
        <hr>              
                <div class="col-sm-4 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <label for="country_id">Страна</label>
                        </div>
                        <div class="col-xs-12">
                            <select class="form-control tc-form-control geographic_select" name="country_id" id="country_id" v-model="strana">
                                <option v-for="(s, idx) in spisokstran" :key="idx" :value="s" > 
                                    <!-- {{spisokstran.push(s.country)}} -->
                                    {{s}} 
                                </option> </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <label for="region_id">Регион</label>
                        </div>
                        <div class="col-xs-12">
                            <div v-if="strana!=''">
                          <select class="form-control tc-form-control geographic_select" aria-label=".form-select-lg example" v-model="region" >
                            <option v-for="(g, idx1) in countries.filter((stra)=>stra.country.includes(strana))" :key="idx1" :value="g.Region"><div v-if="g.country==strana">{{ g.Region }}</div></option>
                            </select>
                        </div>
                        <div v-else><b>Выберите страну</b></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <label for="city_id">Населенный пункт</label>
                        </div>
                        <div class="col-xs-12">
                            <div v-if="region!=''">
                          <select class="form-control tc-form-control geographic_select" aria-label=".form-select-lg example" v-model="naspunkt" >
                            <option v-for="(r, idx) in countries.filter((reg)=>reg.Region.includes(region))" :key="idx" :value="r"><div v-if="r.Region==region">{{ r.city }}</div></option>
                            </select>
                        </div>
                        <div v-else><b>Выберите регион</b></div>
        </div>
                    </div>
                </div>
            </div>
             <hr>  <table class="table table-striped-columns"><tr><td>Температура холодной пятидневки с обеспеченностью 0.92</td> <td> {{naspunkt.Cold5dnevka}} ˚С</td></tr>
    <tr><td>Продолжительность отопительного периода </td> <td>{{naspunkt.OtopPeriod}} суток</td></tr>
    <tr><td>Относительная влажность воздуха наиболее холодного месяца</td> <td>{{naspunkt.Vlazhnost}} % </td></tr>
    <tr><td>Количество градусо-суток отопительного периода (ГСОП)	</td> <td> {{naspunkt.Gsop}} °С•сут</td></tr>
     <tr><td>Базовое значение поэлементных требований R(треб)</td> <td> {{(naspunkt.OtopPeriod*(20-naspunkt.avgT)*0.00035+1.4).toFixed(2)}}</td></tr>
    
      <tr><td>Нормируемое значение поэлементных требований R(норм)</td> <td> {{((naspunkt.OtopPeriod*(20-naspunkt.avgT)*0.00035+1.4)*0.63).toFixed(2)}}</td></tr>
  </table><hr>
  <div class="row"> 
                    
                <div class="col-sm-4 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <label for="country_id">Помещение</label>
                        </div>
                        <div class="col-xs-12">
                            <select id="room_select" class="form-control tc-form-control">
                            <option value="0" selected="selected">Жилое помещение</option>
                            <option value="1">Кухня</option>
                            <option value="2">Ванная</option>
                            <option value="3">Ненормированное</option>
                            <option value="4">Техническое помещение</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <label for="region_id">Тип финального слоя</label>
                        </div>
                        <div class="col-xs-12">
                            <select id="constrtype_select" class="form-control tc-form-control">
                            <option value="0" selected="selected">Внешний</option>
                            <option value="1">Перекрытие над проездом</option>
                            <option value="3">Перекрытие над холодным подвалом, сообщающимся с наружным воздухом</option>
                            <option value="4">Перекрытие над  не отапливаемым подвалом со световыми проемами в стенах</option>
                            <option value="5">Перекрытие над  не отапливаемым подвалом без световых проемов в стенах</option> 
                            <option value="2">Чердачное перекрытие</option>
                            <option value="9">Покрытие (утепленная кровля)</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <label for="city_id">Тип Вычислений</label>
                        </div>
                        <div class="col-xs-12">
                            
                            <select id="counttype_select" class="form-control tc-form-control" v-model="counttype_select">
                            <option value="0" selected="selected">Подбор финального материала</option>
                            <option value="1">Теплотехнический расчёт готовой конструкции</option>
                        </select>
                        
        </div>
                    </div>
                </div>
            </div>
  
                </div>
                
 
  
                        <div v-if="counttype_select=='0'"><b><label for="objecttype_select">Тип финального слоя</label>
  <select id="objecttype_select" class="form-control" v-model="objecttype_select">
                            <option value="0" selected="selected">Внешний</option>
                            <option value="1">Внутренний</option>
                            <option value="2">Промежуточный</option>
                        </select>   

     </b></div> 
     <hr>
                        <div class="panel-body">
            <div class="row">               
                <div class="col-sm-8">
                    <div class="row">
                        <div class="col-sm-12">
                            <label><b>Климатические параметры внутри помещения</b>
                        </label></div>                            
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-sm-6">
                                    <label for="temp_int_id">Температура</label>
                                </div>
                                <div class="col-sm-4 col-sm-offset-2">
                                    <input class="form-control tc-form-control" type="text" id="temp_int_id" value="20" maxlength="2" style="width: 4em;">
                                </div>    
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-sm-6">
                                    <label for="hum_int_id">Влажность</label>
                                </div>
                                <div class="col-sm-4 col-sm-offset-2">
                                    <input class="form-control tc-form-control" type="text" id="hum_int_id" value="55" maxlength="3" style="width: 4em;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row" style="margin-top: 6px; margin-bottom: 8px;">               
                <div class="col-sm-8">
                    <div class="row">
                        <div class="col-sm-12">
                            <label><b>Климатические параметры снаружи помещения</b>
                        </label></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-sm-6">
                                    <label for="temp_ext_id">Температура</label>
                                </div>
                                <div class="col-sm-4 col-sm-offset-2">
                                    <input class="form-control tc-form-control user-climat-data" type="text" id="temp_ext_id" value="-10" maxlength="3" style="width: 4em;">
        
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-sm-6">
                                    <label for="hum_ext_id">Влажность</label>
                                </div>
                                <div class="col-sm-4 col-sm-offset-2">
                                <input class="form-control tc-form-control user-climat-data" type="text" id="hum_ext_id" value="85" maxlength="3" style="width: 4em;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr>
            <div v-if="checked && naspunkt.city!='qwe' && counttype_select!=''">
  <label><b>Название материала</b></label>
  <div><input v-model="NewName" ></div>  
  <label><b>Коэффициент теплопроводности А</b></label>
  <div><input type="number" v-model.number="NewTermResistA" ></div>  
  <label><b>Коэффициент теплопроводности B</b></label>
  <div><input type="number" v-model="NewTermResistB" ></div>  
  <label><b>Введите толщину слоя(мм)</b></label>
  <div><input type="number" v-model.number="NewMaterialWidth"></div>  
  <div>
  <button class="btn btn-success btn-sm" @click.prevent="AddNewMaterial">Добавить новый материал</button>
</div>
  </div>
            
         
        </div>
        <hr>
  

  
  </form> 
 <form>
    <label for="checkbox">Будете использовать материалы не из представленного каталога?</label>
    <input type="checkbox" id="checkbox" v-model="checked">
        
  
  <div v-if="naspunkt.city!='qwe' && counttype_select!=''">
    <div>
  <select v-model="material">
    <option v-for="(item2, index) in materials" v-bind:key="item2" v-bind:value="materials[index]">{{materials[index].name}}</option>
  </select>
</div>

  <label><b>Введите толщину слоя(мм)</b></label>
  <div><input type="number" v-model="NewWidth" v-on:input="inputChange"></div>  
  <table><tr><td>Коэффициент теплопроводности А=</td><td> {{material.termResistA}}</td></tr></table>
  <table><tr><td>Коэффициент теплопроводности B=</td><td> {{material.termResistB}}</td></tr></table>
  <table><tr><td>Заданная толщина слоя =</td><td> {{NewWidth}}мм</td></tr></table> 
  <div><b>Норма - {{((naspunkt.OtopPeriod*(20-naspunkt.avgT)*0.00035+1.4)*0.63).toFixed(2)}}</b></div>
  </div>
  <div v-else>
    <b>Чтобы выбирать материалы для конструкции необходимо выбрать город и тип расчёта</b>
  </div>
  
  
</form>


   
     
     <button class="btn btn-success btn-sm" @click="AddMaterial">Добавить слой</button>
     <hr>
      
     <div v-if="sumteplo>((naspunkt.OtopPeriod*(20-naspunkt.avgT)*0.00035+1.4)*0.63).toFixed(2)"><b>{{sumteplo.toFixed(3)}} - хороший показатель. 
     </b></div>
     <div v-else-if="sumteplo!==0"><b>{{sumteplo.toFixed(3)}}&lt;{{(((naspunkt.OtopPeriod*(20-naspunkt.avgT)*0.00035+1.4)*0.63).toFixed(2))}} - недостаточный показатель. 
    </b></div>
     <div v-if="usedMaterials.length!==0">
     <div v-for="(usedStuf,i) in usedMaterials" v-bind:key="i">{{usedStuf.name}} Толщина:{{usedStuf.width}}   <button class="btn-secondary" v-on:click="RemoveLayer(i)"><i class="bi bi-x-circle-fill"></i></button> </div>
     <div>
     <button class="btn btn-primary" type="button" @click="CountTeplo">Рассчитать</button> 
    </div>
  </div> 

     
      <div v-else>
      <b>Материалов еще нет. Добавьте первый.</b>
      </div>
      <div v-if="usedMaterials.length!=0 && counttype_select==0 && objecttype_select!=''">
        <div><b>Возможные материалы для финального слоя и их толщины </b></div>
    <div v-for="(item3, index1) in materials" v-bind:key="item3" v-bind:value="materials[index1]">
        <div v-if="objecttype_select==0">
            <div v-if="materials[index1].outside==1"> {{materials[index1].name}} толщиной от {{(materials[index1].termResistA*difference*10000).toFixed(0)+1}}</div>
        </div>
        <div v-if="objecttype_select==1">
            <div v-if="materials[index1].inside==1"> {{materials[index1].name}} толщиной от {{(materials[index1].termResistA*difference*10000).toFixed(0)+1}}</div>
        </div>
        <div v-if="objecttype_select==2">
            <div v-if="materials[index1].middle==1"> {{materials[index1].name}} толщиной от {{(materials[index1].termResistA*difference*10000).toFixed(0)+1}} </div>
        </div>
    </div>
    </div> 
</div>

</template>

<script>
import db from './init'
import {collection, query, addDoc, getDocs} from 'firebase/firestore'

export default {
    created() {
        this.getCountry()
        this.getMaterials()
        // this.CreatePlace()
        // this.CreateMaterial()
    },
    data() {
        return {
            checked : false,
            NewMaterialWidth: 0,
            NewTermResistA: 0,
            NewTermResistB: 0,
            NewName: "",
        //    country: '',
            strana : '',
            region : '',
            objecttype_select: '',
            counttype_select: '',
           naspunkt: {
                Cold5dnevka: -35,
                Gsop: 6199.4,
                OtopPeriod: 223,
                Vlazhnost: 78,
                ZonaVlaz: "Сухой",
                avgT: 1,
                city: 'qwe',
                country: "Армения"
           },
           material: '',
           place: ' ',
           selected: 'A',
           sumteplo: 0,
           difference : 0,
           message: 0,
           NewWidth: 0,
           sumteploP: 0,
         spisokstran: ["Армения", "Россия", "Грузия", "Беларусь", "Казахстан", "Молдова"],
         countries: [],
         places: [
          
         ],
         materials: [
            {id: 1, name: 'Эковата 35 кг/м³', termResistA: 0.04, termResistB: 0.043, width: 100 },
           {id: 2, name: 'Щебень пеностекольный 100 кг/м³',termResistA: 0.078, termResistB: 0.08, width: 100 },
           {id: 3, name: 'Сосна и ель', termResistA: 0.14, termResistB: 0.18, width: 100  },
           {id: 4, name: 'Известняк 1400 кг/м³', termResistA: 0.56, termResistB: 0.58, width: 100  },
           {id: 5, name: 'Медь',termResistA: 407, termResistB: 407, width: 100  },
           {id: 6, name: 'Картон облицовочный',termResistA: 0.21, termResistB: 0.23, width: 100  },
           {id: 7, name: 'Гипсовая штукатурка',termResistA: 0.31, termResistB: 0.35, width: 100 },
           {id: 8, name: 'Керамзитобетон',termResistA: 0.29, termResistB: 0.35, width: 100 },
           {id: 9, name: 'Асфальтобетон',termResistA: 1.05, termResistB: 1.05, width: 100 },
           
         ],
         usedMaterials:[], 
        }
    },
      //    {id: 1, name: 'Перлитобетон', termResistA: 0.44, termResistB: 0.5, width: 100 },
        //    {id: 2, name: 'Фанера клееная',termResistA: 0.15, termResistB: 0.18, width: 100 },
        //    {id: 3, name: 'Туфобетон', termResistA: 0.87, termResistB: 0.99, width: 100  },
        //    {id: 4, name: 'Стекловата П-15', termResistA: 0.049, termResistB: 0.055, width: 100  },
        //    {id: 5, name: 'Минеральная (каменная) вата',termResistA: 0.038, termResistB: 0.043, width: 100  },
        //    {id: 6, name: 'Дуб',termResistA: 0.18, termResistB: 0.23, width: 100  },
        //    {id: 7, name: 'Саман',termResistA: 0.58, termResistB: 0.69, width: 100 },
        //    {id: 8, name: 'Цементно-песчаный раствор',termResistA: 0.21, termResistB: 0.26, width: 100 },
        //    {id: 9, name: 'Щебень пеностекольный 100 кг/м³',termResistA: 0.065, termResistB: 0.067, width: 100 },
        //    {id: 10, name: 'Песок для строительных работ',termResistA: 0.47, termResistB: 0.58, width: 100 },
        //    {id: 11, name: 'Сталь',termResistA: 58, termResistB: 58, width: 100 } 




      //    {id: 1, country: 'Россия', city: 'Москва', Cold5dnevka: -26, OtopPeriod: 204, AvgT: -2.2, Vlazhnost: 84, Gsop: 4528.8, ZonaVlaz: 'Нормальный' },
        //    {id: 2, country: 'Россия', city: 'Ростов-на-дону', Cold5dnevka: -18, OtopPeriod: 167, AvgT: 0, Vlazhnost: 85, Gsop: 3340.0, ZonaVlaz: 'Сухой'},
        //    {id: 3, country: 'Россия', city: 'Тюмень', Cold5dnevka: -35, OtopPeriod: 223, AvgT: -6.8, Vlazhnost: 78, Gsop: 6199.4, ZonaVlaz: 'Сухой' },
        //    {id: 4, country: 'Армения', city: 'Ереван', Cold5dnevka: -17, OtopPeriod: 140, AvgT: 1, Vlazhnost: 78, Gsop: 2660, ZonaVlaz: 'Сухой' },
        //    {id: 5, country: 'Армения', city: 'Севан', Cold5dnevka: -18, OtopPeriod: 213, AvgT: -2, Vlazhnost: 81, Gsop: 4686.0, ZonaVlaz: 'Сухой' },
        //    {id: 6, country: 'Армения', city: 'Ванадзор', Cold5dnevka: -15, OtopPeriod: 180, AvgT: 0.7, Vlazhnost: 69, Gsop: 3474.0, ZonaVlaz: 'Сухой' },
        //    {id: 7, country: 'Грузия', city: 'Тбилиси', Cold5dnevka: -8, OtopPeriod: 121, AvgT: 4.1, Vlazhnost: 85, Gsop: 1923.9, ZonaVlaz: 'Сухой' },
        //    {id: 8, country: 'Грузия', city: 'Цхинвали', Cold5dnevka: -4, OtopPeriod: 154, AvgT: 2.2, Vlazhnost: 85, Gsop: 2741.2, ZonaVlaz: 'Сухой' },
        //    {id: 9, country: 'Грузия', city: 'Телави', Cold5dnevka: -8, OtopPeriod: 133, AvgT: 3.5, Vlazhnost: 85, Gsop: 2194.5, ZonaVlaz: 'Сухой' },
        // {id: 1, country: 'Россия', Region:'Воронежская область' ,city: 'Воронеж', Cold5dnevka: -24, OtopPeriod: 190, AvgT: -2.4, Vlazhnost: 83, Gsop: 4526.0, ZonaVlaz: 'Нормальный' },
        //    {id: 2, country: 'Россия',Region:'Краснодарский край' , city: 'Краснодар', Cold5dnevka: -15, OtopPeriod: 146, AvgT: 2.7, Vlazhnost: 81, Gsop: 2525.8, ZonaVlaz: 'Сухой'},
        //    {id: 3, country: 'Россия', Region:'Ленинградская область' ,city: 'Санкт-Петербург', Cold5dnevka: -24, OtopPeriod: 211, AvgT: -1.2, Vlazhnost: 86, Gsop: 4473.2, ZonaVlaz: 'Сухой' },
        //    {id: 4, country: 'Россия',Region:'Ставропольский край' , city: 'Ставрополь', Cold5dnevka: -18, OtopPeriod: 168, AvgT: 0.6, Vlazhnost: 83, Gsop: 3259.2, ZonaVlaz: 'Сухой' },
        //    {id: 5, country: 'Беларусь', Region:'Минская область' ,city: 'Минск', Cold5dnevka: -24, OtopPeriod: 202, AvgT: -1.6, Vlazhnost: 86, Gsop: 4363.2, ZonaVlaz: 'Сухой' },
        //    {id: 6, country: 'Беларусь',Region:'Брестская область' , city: 'Брест', Cold5dnevka: -21, OtopPeriod: 186, AvgT: 0.1, Vlazhnost: 85, Gsop: 3701.4, ZonaVlaz: 'Нормальный' },
        //    {id: 7, country: 'Казахстан',Region:'Акмолинская область' , city: 'Астана', Cold5dnevka: -31.2, OtopPeriod: 209, AvgT: -6.3, Vlazhnost: 74, Gsop: 5705.7, ZonaVlaz: 'Сухой' },
        //    {id: 8, country: 'Казахстан', Region:'Алматинская область' ,city: 'Алматы', Cold5dnevka: -20.1, OtopPeriod: 164, AvgT: 0.4, Vlazhnost: 65, Gsop: 3214.4, ZonaVlaz: 'Нормальный' },
        //    {id: 9, country: 'Молдова', Region:'Республика Молдова ' ,city: 'Кишинев', Cold5dnevka: -17, OtopPeriod: 162, AvgT: 0.6, Vlazhnost: 81, Gsop: 3142.8, ZonaVlaz: 'Сухой' },
    methods: {
        async CreatePlace() {
            const colRef =collection(db, 'places')
            this.places.forEach(element =>{
                const dataObj = {
                Region: element.Region,
                Cold5dnevka:element.Cold5dnevka,
                Gsop: element.Gsop,
                OtopPeriod: element.OtopPeriod,
                Vlazhnost: element.Vlazhnost,
                ZonaVlaz: element.ZonaVlaz,
                avgT: element.AvgT,
                city: element.city,
                country: element.country
            } 
                const docRef =  addDoc(colRef, dataObj)
           
            
            })
            

            // console.log("Document was created with id ", docRef.id)
        },
        async getCountry()
        {
            const querySnap = await getDocs(query(collection(db,'places')))
            querySnap.forEach((doc) => {
                // console.log(doc)
                this.countries.push(doc.data())
                
            })

        },
        async CreateMaterial() {
            const col1Ref =collection(db, 'materials')
            this.materials.forEach(element => {

                const dataObject = {
                name: element.name,
                termResistA: element.termResistA,
                termResistB: element.termResistB,
                width: 100,
                inside: 1,
                outside: 1,
                middle: 0
            }
           
            const doc1Ref = addDoc(col1Ref, dataObject)
        })
        
        },
        async getMaterials()
        {
            const querySnap = await getDocs(query(collection(db,'materials')))
            querySnap.forEach((doc) => {
                // console.log(doc)
                this.materials.push(doc.data())
                
            })

        },
    //     AddMaterial() {
        
    //     if (this.material!==null && this.material!=={} && this.NewWidth>0 && this.naspunkt.city!=="qwe") {
    //     this.material.width=this.NewWidth;
    //     this.usedMaterials.push(this.material);
    //     this.PredvaritelniyCount()
    //     this.difference =  ((this.naspunkt.OtopPeriod*(20-this.naspunkt.avgT)*0.00035+1.4)*0.63).toFixed(2) - this.sumteploP
    //     console.log(this.difference)
    //     }
    //   },
    
      AddNewMaterial() {
        
        console.log('region',this.region)
        console.log('g',this.g)
        console.log('r',this.r)
        console.log('nasp',this.naspunkt)
        if (this.NewMaterialWidth!==0 && this.NewTermResistA!==0 && this.NewTermResistB!==0 && this.NewName!==null) {
            const dataObject = {
                name: this.NewName,
                termResistA: this.NewTermResistA,
                termResistB: this.NewTermResistB,
                width: this.NewMaterialWidth,
                inside: 1,
                outside: 1,
                middle: 0
            }
        // b = {
        //     NewMaterialWidth: this.NewMaterialWidth,
        //     NewTermResistA: this.termResistA,
        //     NewTermResistB: this.termResistB,
        //     NewName: this.NewName,

        //     }
        // console.log(this.NewMaterialWidth)
        // console.log(this.NewTermResistA)
        // console.log(this.NewTermResistB)
        // console.log(this.NewName)
       
        this.usedMaterials.push(dataObject);
    
        this.PredvaritelniyCount()
        this.difference =  ((this.naspunkt.OtopPeriod*(20-this.naspunkt.avgT)*0.00035+1.4)*0.63).toFixed(2) - this.sumteploP
        
        }
    },
      AddMaterial() {
        console.log('strana',this.strana)
        console.log('region',this.region)
        console.log('g',this.g)
        console.log('r',this.r)
        console.log('nasp',this.naspunkt)
        if (this.material!==null && this.material!=={} && this.NewWidth>0 && this.naspunkt.city!=="qwe") {
        this.material.width=this.NewWidth;
        this.usedMaterials.push(this.material);
        this.PredvaritelniyCount()
        this.difference =  ((this.naspunkt.OtopPeriod*(20-this.naspunkt.avgT)*0.00035+1.4)*0.63).toFixed(2) - this.sumteploP
        console.log(this.difference)
        }
    },
      PredvaritelniyCount() {
        
        this.sumteploP=0;
        console.log('sumteplo v pr',this.sumteploP,typeof(this.sumteploP))
        
        this.usedMaterials.forEach(element => {
          this.sumteploP+=(element.width*0.0001)/element.termResistA;
         
        });
        console.log('sumteplo v pr 2',this.sumteploP,typeof(this.sumteploP))
        this.sumteploP+=(1/8.7)+(1/23)
      },
      CountTeplo() {
        
        this.sumteplo=0;
        this.usedMaterials.forEach(element => {
          this.sumteplo+=(element.width*0.0001)/element.termResistA;
        });
        this.sumteplo+=(1/8.7)+(1/23)
      },
      RemoveLayer(i) {
        this.usedMaterials.splice(i,1)
        this.PredvaritelniyCount()
        this.difference =  ((this.naspunkt.OtopPeriod*(20-this.naspunkt.avgT)*0.00035+1.4)*0.63).toFixed(2) - this.sumteploP
        console.log(this.difference)
        
      },
      inputChange(event) {
        this.NewWidth=event.target.value
      },
    },
   
    watch: {
      p(value) {
        console.log('Material changed', value)
      }
    }
    
    
}

</script>
