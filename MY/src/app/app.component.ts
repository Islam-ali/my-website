import { Component } from '@angular/core';
import * as $ from 'jquery';
import { from } from 'rxjs';
import {WOW} from 'wowjs';
import Typed from 'typed.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY';

  ngOnInit() {
    new WOW().init();

    /****************LOADING******************* */
      $(window).on( 'load' ,function(){
        $('body').css({'overflow-y' : 'auto'})
        $('.bg-sk').fadeOut()
      });
    /******************typed************ */

                if ($('.typed').length) {
          var typed_strings = $(".typed").data('typed-items');
          typed_strings = typed_strings.split(',')
          new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 150,
            backSpeed: 50,
            backDelay: 2000
          });
        }  

          /**********CLOCK**************** */
      showtime();
      function showtime(){
          var date = new Date();

          var h = date.getHours();
          var m = date.getMinutes();
          var s = date.getSeconds();
          var session = "AM";

          if (h >= 12)
          {
              session = "PM"
          }
          if(h == 0 )
          {
              h = 12;
          }
          if(h > 12)
          {
              h = h - 12;
          }
          let z:any = "0";
          if(h < 10)
          {
              h =  z + h;
          }
          if(m < 10)
          {
              m = z + m;
          }
          if(s < 10)
          {
              s = z + s;
          }

          $('.h').html(h);
          $('.m').html(m);
          $('.s').html(s);
          $('.AM').html(session);
          setTimeout(showtime,1000)

      }
/****************END-CLOCK******************* */
        

        /* nav-icon-6 */
        const icons = document.querySelectorAll('.icon');
        icons.forEach (icon => {  
          icon.addEventListener('click', (event) => {
            icon.classList.toggle("open");
          });
        });


        /**************dark-mood******************** */
        $('.btn-mood').click(function(){
          $('.bg-lights').toggleClass('bg-darks');
          if ($('#ABOUT').hasClass('bg-darks'))
          {
            $('.h3 , h4').css({'color':'#999999'})
            $('.p-light , h6').css({'color':'#999999'})
            $('.fa-cloud-moon').css({'color' : '#fafaf9'})
            $('.fa-sun').css({'color' : '#111111'})
          }
          else
          {
            $('.h3 , h4').css({'color':'#111111'})
            $('.p-light , h6').css({'color':'#111111'})
            $('.fa-cloud-moon').css({'color' : '#111111'})
            $('.fa-sun').css({'color' : '#f7b818'})
          }
        });
        /*******************icon-settings***************************** */
        $('.icon-settings').click(function(){
          $(this).toggleClass("active")
          $('#SETTINGS').toggleClass('hiddden');
        })
        /*******************colapps*********************** */
        $('.icon').click(function(){
          $('.colapps-icon').toggleClass('show');
        });
        /****************active********************** */
        $('a').click(function () {
          $(this).addClass("active").parent().siblings().find('a').removeClass("active");
        })
        $('.circle').click(function () {
          $(this).addClass("active").siblings().removeClass("active");
        })
        $('.ul-buttons li ').click(function () {
          $(this).addClass("active").siblings().removeClass("active");
        })

        /***********************filter-my-resume*************************** */
        $('.ul-buttons li').click(function(){

          const attr = $(this).attr('data-filter');
          if(attr == 'EXPERIENCE')
          {
            $('.EDUCATION').fadeOut(300);
            $('.EXPERIENCE').fadeIn(300);
          }
          else
          {
            $('.resume').not('.'+attr).fadeOut(300);
            $('.resume').filter('.'+attr).fadeIn(300);
          }
      });

      /**********************toggle-bg-nav************************ */
        $(window).scroll(function(){
          if ( $(window).scrollTop() >= 50 )
            {
              $(".navbar").addClass("bg-nav");
            }
          else
            {
            $(".navbar").removeClass("bg-nav")
            }
            if ( $(window).scrollTop() >= $("#HOME").outerHeight() )
            {
            $(".icon-top").fadeIn(500);
            }
          else
            {
            $(".icon-top").fadeOut(300)
            }
      });
      /*************************scroll-top******************************* */
        $(".icon-top").click(function()
        { 
          $("body , html").animate({scrollTop:0},1000);
        });

        /******************************smooth-scroll******************************** */
        $(".nav-item a").click(function(){
          let ahref = $(this).attr("href");
          let secoffset = $(ahref).offset().top;
          $("body , html").animate({scrollTop:secoffset},1000) 
      });







  }
}
