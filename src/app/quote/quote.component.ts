import { BindingType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  mySelectframetype = '1';
  selectedFrameType: any;
  frametypes = [
    {
      id: 1,
      name: 'None'
    },
    {
      id: 2,
      name: 'Full Rim'
    },
    {
      id: 3,
      name: 'Half Rim'
    },
    {
      id: 4,
      name: 'Rimless'
    }
  ];


  mySelectoffer = '1';
  selectedOffer: any;
  Offers = [
    {
      id: 1,
      name: "None"
    },
    {
      id: 2,
      name: "Offer"
    }
  ]

  mySelectcategory = '1';
  selectedCategory: any;
  Categories = [
    {
      id: 1,
      name: "None"
    },
    {
      id: 2,
      name: "Type 1"
    },
    {
      id: 3,
      name: "Type 2"
    },
    {
      id: 4,
      name: "Type 3"
    },
    {
      id: 5,
      name: "Type 4"
    }
  ];


  mySelectlenspowertype = '1';
  selectedLenspowertype: any;
  Lenspowertypes = [
    {
      id: 1,
      name: "Single Vision"
    },
    {
      id: 2,
      name: "Kryptok"
    },
    {
      id: 3,
      name: "Progressive"
    }
  ];

  mySelectcoating = '1';
  selectedCoating: any;
  Coatings = [
    {
      id: 1,
      name: "None"
    },
    {
      id: 2,
      name: "Green Coat"
    },
    {
      id: 3,
      name: "Blue Coat"
    },
    {
      id: 4,
      name: "Photo Chromic"
    }
  ];

isShown: boolean = false ; // hidden by default

items: object;
input: object;

mySelectframe = '10';
selectedframe: string='';
srvproducts: object = [];

srvspherical: object;
srvprogressive: object;
srvgreencoat: object;
srvbluecoat: object;
srvphotochromic: object;
srvcylinder: object;

password: string;
offer: number = 0;

spherical: number = 0;
cylinder: number = 0;


srvitemid: number = 0;
srvitemname: string="";
srvitembaseunit: number = 0;
srvitemcalc: number = 0;
srvitemvalue: number = 0;

framerate: number = 0;

  sphericalrate: number = 0;
  progressiverate: number = 0;
  baserate: number = 0;
  coatingrate: number = 0;
  cylinderrate: number =0;

  lensrate: number = 0;

fittingrate: number = 0;

estimaterate: number = 0;

grossrate: number=0;
dispercent: number = 0;
salesrate: number = 0;

num: number = 1;

public listitems: Array<String> = [];

  constructor(private _http: HttpService) { }

  ngOnInit(): void {

    this._http.GetProducts().subscribe(data => {
      this.srvproducts = data;
   });

   
      this._http.GetRateInput(1).subscribe(data =>{
        this.srvspherical = data;
      });
  
  
        this._http.GetRateInput(2).subscribe(data =>{
          this.srvprogressive = data;
        });

  
        this._http.GetRateInput(3).subscribe(data =>{
          this.srvgreencoat = data;
        });
  

        this._http.GetRateInput(4).subscribe(data =>{
          this.srvbluecoat = data;
        });


        this._http.GetRateInput(5).subscribe(data =>{
          this.srvphotochromic = data;
        });

        this._http.GetRateInput(6).subscribe(data =>{
          this.srvcylinder = data;
        });

    }

  
  toggleShow() {
  
    if (this.password == "9stdasec")
    {
      this.isShown = true;
    }
    else
    {
      this.isShown = false;
    }
   
  }



  selectFrame(event: any) {
    // this.selectedframe = this._http.getDropDownProduct(this.mySelectframe, this.srvproducts)[0].productid;
    this.selectedframe = event.target.value;
}


  selectFrameType() {
    this.selectedFrameType = this._http.getDropDownText(this.mySelectframetype, this.frametypes)[0].name;
}

selectCategory() {
  this.selectedCategory = this._http.getDropDownText(this.mySelectcategory, this.Categories)[0].name;
}

selectOffer() {
  this.selectedOffer = this._http.getDropDownText(this.mySelectoffer, this.Offers)[0].name;
}

selectLenspowertype() {
  this.selectedLenspowertype = this._http.getDropDownText(this.mySelectlenspowertype, this.Lenspowertypes)[0].name;
}


selectCoating() {
  this.selectedCoating = this._http.getDropDownText(this.mySelectcoating, this.Coatings)[0].name;
}


  getrateestimate()
  {
    if (this.password == "9stdasec" || this.password == "bluebaby")
    {
        if (this.selectedFrameType == "Full Rim")
        {
            this.fittingrate = 50;      
        }
        else if (this.selectedFrameType == "Half Rim")
        {
          this.fittingrate = 70;
        }
        else if (this.selectedFrameType == "Rimless")
        {
          this.fittingrate = 150;
        }
        else
        {
          this.fittingrate = 0;
        }


        if (this.selectedLenspowertype == "Progressive")
        {
          this.fittingrate = this.fittingrate + 50;
        }




        if (this.selectedCategory == "Type 1")
        {
          this.dispercent = 10;      
        }
        else if (this.selectedCategory == "Type 2")
        {
          this.dispercent = 20;
        }
        else if (this.selectedCategory == "Type 3")
        {
          this.dispercent = 30;
        }
        else if (this.selectedCategory == "Type 4")
        {
          this.dispercent = 40;
        }
        else
        {
          this.dispercent = 0;
        }


        if (this.password == "bluebaby")
        {
          this.dispercent = 0;
        }

      for (this.num = 0; this.num < Object.keys(this.srvproducts).length; this.num++)
      {
        if (this.srvproducts[this.num]["productid"] == this.selectedframe)
        {
          this.framerate = this.srvproducts[this.num]["delproductrate"];
        }
      }

      this.sphericalrate = (this.spherical  / this.srvspherical["itembaseunit"]) * this.srvspherical["itemvalue"];





      if(this.selectedLenspowertype == "Progressive")
      {
        this.progressiverate = this.sphericalrate * this.srvprogressive["itemvalue"];
      }
      else
      {
        this.progressiverate = 0;
      }

      this.baserate = this.sphericalrate + this.progressiverate;

      if (this.selectedCoating == "Green Coat")
      {
          this.coatingrate = this.baserate * this.srvgreencoat["itemvalue"];

          if (!(this.selectedLenspowertype == "Progressive"))
          {
            if(this.sphericalrate == 0 && this.cylinder == 0)
            {
              this.coatingrate = 110;
            }
            else
            {
              this.coatingrate = this.coatingrate + 70;
            }
            
          }
      }
      else if (this.selectedCoating == "Blue Coat")
      {
        this.coatingrate = this.baserate * this.srvbluecoat["itemvalue"];

        if (!(this.selectedLenspowertype == "Progressive"))
        {
          if(this.sphericalrate == 0 && this.cylinder == 0)
          {
            this.coatingrate = 150;
          }
          else
          {
            this.coatingrate = this.coatingrate + 100;
          }
          
        }
        
      }
      else if (this.selectedCoating == "Photo Chromic")
      {
        this.coatingrate = this.baserate * this.srvphotochromic["itemvalue"];
      }
      else
      {
        this.coatingrate = 0;
      }
      

      if (this.selectedCoating == "Photo Chromic")
      {
        this.fittingrate = this.fittingrate + 30;
      }

      if(this.spherical > 0)
      {
        this.cylinderrate = (this.cylinder  / this.srvcylinder["itembaseunit"]) * this.srvcylinder["itemvalue"];
      }
      else
      {
        this.cylinderrate = (this.cylinder  / this.srvcylinder["itembaseunit"]) * (this.srvcylinder["itemvalue"] / 2);
      }

      this.lensrate = this.sphericalrate + this.progressiverate + this.coatingrate + this.cylinderrate;


      this.estimaterate =  this.framerate + this.lensrate + this.fittingrate;

      if(this.selectedOffer == "Offer")
      {

        this.grossrate = this.estimaterate * 6.5;
      }
      else
      {
        this.grossrate = this.estimaterate * 5;
      }
      
      if(this.selectedOffer == "Offer")
      {
        this.salesrate = (this.estimaterate * 6.5) * (1-(this.dispercent/100));
      }
      else
      {
        this.salesrate = (this.estimaterate * 5) * (1-(this.dispercent/100));
      }
      

    }
    else
    {
      this.salesrate = 100;
    }

    
  }
}
