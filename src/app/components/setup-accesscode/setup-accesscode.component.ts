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
  public showSaveConfirmation = false;

  public toolTipText = "Vul de Rol en het Aantal in, en druk op Toegangscodes aanmaken";

  constructor(private accessCodeService: AccessCodeService) {
    this.accessCodePost = new AccessCodePost();
  }

  ngOnInit(): void {
    this.accessCodeService.getAllCodes().subscribe((res) => {
      this.accessCodes = res;
      if(this.accessCodes)
        this.accessCodes.sort(this.compare)
    });
  }

  createNewCodes(): void {
    this.resetConfirmations();

    let accessCodePost = new AccessCodePost();
    accessCodePost = this.accessCodePost;

    this.accessCodeService.generateCodes(this.accessCodePost).subscribe((res) => {
      this.ngOnInit();
      this.showSaveConfirmation = true;
    });
  }

  resetConfirmations(): void {
    this.showSaveConfirmation = false;
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
