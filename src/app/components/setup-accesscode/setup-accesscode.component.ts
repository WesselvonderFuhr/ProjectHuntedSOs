import { Component, OnInit } from '@angular/core';
import { AccessCodePost } from 'src/app/models/accesscode_post.model';
import { AccessCode } from 'src/app/models/accesscode.model';
import { AccessCodeService } from 'src/app/services/access-code/accesscode.service'

@Component({
  selector: 'app-setup-accesscode',
  templateUrl: './setup-accesscode.component.html',
  styleUrls: ['./setup-accesscode.component.scss']
})
export class SetupAccesscodeComponent implements OnInit {

  public accessCodePost: AccessCodePost;
  public accessCodes: AccessCode[];

  constructor(private accessCodeService: AccessCodeService) { 
    this.accessCodePost = new AccessCodePost();
  }

  ngOnInit(): void {
    this.accessCodeService.getAllCodes().subscribe((res) => {
      this.accessCodes = res;
      this.accessCodes.sort(this.compare)
    });
  }

  createNewCode(role: string) {
    this.accessCodePost.amount = 1;
    this.accessCodePost.role = role;

    this.accessCodeService.generateCodes(this.accessCodePost).subscribe((res) => {
      console.log('Added ' + this.accessCodePost.amount + ' new ' + this.accessCodePost.role + ' access codes!');
      this.ngOnInit();
    });
  }

  compare(a: AccessCode, b: AccessCode ) {
    if ( a.role < b.role ){
      return 1;
    }
    if ( a.role > b.role ){
      return -1;
    }
    return 0;
  }
  
}
