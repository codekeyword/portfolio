import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFacebook,faSquareInstagram,faSquareYoutube,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase,faLineChart,faGlobe } from '@fortawesome/free-solid-svg-icons';

declare var VANTA:any;


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
  public screenWidth: any;  
  public fb=faFacebook;
  in=faSquareInstagram;
  yt=faSquareYoutube;
  public screenHeight: any; 
  public _router:any;
  public _route:any;
  public socialMediaList:any;
  public bcicon=faBriefcase;
  public lcicon=faLineChart;
  public faGithub=faGithub;

  public gicon=faGlobe;
  public aboutList=["fa-chart-line","globe","fa-briefcase"]
  constructor( private router: Router,private route:ActivatedRoute) {
    this._router=router;
    this.socialMediaList=[{
      icon:this.yt,
      title:"Youtube",
      tooltip:"Youtube",
      link:"https://www.youtube.com/@codekeyword.io.?sub_confirmation=1",
      order:1
    },{
         icon:this.in,
         title:"Instagram",
         tooltip:"Instagram",
         link:"https://www.instagram.com/codekeyword.io/",
         order:2

    },{
      icon:this.faGithub,
      title:"Github",
      tooltip:"Github",
      link:"https://github.com/codekeyword/",
      order:3
    },{
      icon:this.fb,
      title:"Facebook",
      tooltip:"Facebook",
      link:"https://www.facebook.com/share/Y1bWT6zUrDSA52J5/?mibextid=qi2Omg",
      order:4
    }]
   

  }
  public bird:any;
  ngOnInit(): void {
    this.setBackground();
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.reloadCurrentRoute();
  }
  setBackground(){
    this.screenWidth = window.innerWidth-2;  
    this.screenHeight = window.innerHeight-2;  
    console.log(this.screenWidth);
    console.log(this.screenHeight);
    if(this.bird) this.bird=null;
   this.bird= VANTA.BIRDS({
      el: "#your-element-selector", 
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: this.screenHeight,
      minWidth: this.screenWidth,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0xfdf0d5,
      color1: 0x00304a,
      color2:  0xc1121f,
      colorMode: "varianceGradient",
      birdSize: 1.2,
      wingSpan: 12.00,
      alignment: 35.00,
      cohesion: 81.00,
      quantity: 3.00,
      separation:8
    })  
  }
  reloadCurrentRoute() {   
   window.location.reload();
  }
}
