<template>
    <div id="form-container">
        <div class="form-page" id="first-page">
            <h2>Industry</h2>
            <div class="form-buttons-container">
                <div class="form-button" v-for="item in buttonData.industryPage" @click="scrollToLocation($event)" :key="item.id">
                    <span>{{item}}</span>
                </div>
            </div>
        </div>

        <div class="form-page" id="second-page">
            <h2>Location</h2>
            <div class="form-buttons-container">
                <div class="form-button" v-for="item in buttonData.locationPage" @click="scrollToCustomerInformation($event)" :key="item.id">
                    <span>{{item}}</span>
                </div>
            </div>
        </div>

        <div class="form-page" id="third-page">
            <h2>Awesome!</h2>
            <p>We will be working hard to create a customized estimation for you very soon. 
            <br/>
                For now, we just need a little bit of information
                in order to reach out to you.
            </p>
            <div class="form-content-container">
                <div class="name form-element">
                    <input placeholder="Name" type="text" v-model="formData.contact.name"/>
                </div>

                <div class="email form-element">
                    <input placeholder="Email" type="text" v-model="formData.contact.email"/>
                </div>

                <div class="phone form-element">
                    <input placeholder="Phone" type="text" v-model="formData.contact.phone"/>
                </div>

                <div class="inquiry form-element">
                    <textarea placeholder="Inquiry" type="text" v-model="formData.contact.inquiry"/>
                </div>
            </div>

            <button id="submit-button" @click="printForm">Submit</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import $ from 'jquery';

@Component
export default class Form extends Vue {
    data() {
        return {
            buttonData: {
                industryPage: ['Hospitality', 'Restaurant', 'Campus', 'Other'],
                locationPage: ['Los Angeles', 'Orange County', 'Riverside', 'Other']
            },
            formData: {
                industry: '',
                location: '',
                contact: {
                    name: '',
                    email: '',
                    phone: '',
                    inquiry: '',
                }
            }
        }
    }

    printForm() {
        let formData = {
            'industry': this.$data.formData.industry,
            'location': this.$data.formData.location,
            'contact': {
                name: this.$data.formData.contact.name,
                email: this.$data.formData.contact.email,
                phone: this.$data.formData.contact.phone,
                inquiry: this.$data.formData.contact.inquiry,
            }
        }
        console.log(formData);
           //email the completed form to peekpeekTest@gmail.com
           var data = {
            service_id: 'gmail',
                template_id: 'customer_info',
                    user_id: 'user_fff9Opb1hmekqqBL26773',
                        template_params: {
                        'name' : `${formData.contact.name}`,
                        'email' : `${formData.contact.email}`,
                        'phone' : `${formData.contact.phone}`,
                        'industry' : `${formData.industry}`,
                        'location' : `${formData.location}`,
                        'inquery' : `${formData.contact.inquiry}`
                        }
                        };

                        let request = new XMLHttpRequest();
                        request.open('POST', 'https://api.emailjs.com/api/v1.0/email/send');
                        request.setRequestHeader('Content-Type', 'application/json');
                        request.onreadystatechange = function() {
                            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                                console.log('All good');
                            } else {
                                console.log('Status: ' + this.status)
                                console.log(this.response);
                            }
                        }
                        request.send(JSON.stringify(data));
                       
                        // $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
                        // type: 'POST',
                        // data: JSON.stringify(data),
                        // contentType: 'application/json'
                        // }).fail(function(error: any) {
                        // alert('Oops... ' + JSON.stringify(error));
                        // });
                        //console.log('printForm started');
        this.$parent.$data.showContactForm = false;
    }

    scrollToLocation(event: MouseEvent) {
        let target: HTMLElement = <HTMLElement> event.srcElement!;
        let targetHTML = target.tagName === 'SPAN' ? target.innerHTML : target.children[0].innerHTML;
        this.$data.formData.industry = targetHTML;
        
        document.getElementById('first-page')!.style.left = '-100%';
        document.getElementById('second-page')!.style.left = '0';
        document.getElementById('third-page')!.style.left = '100%';
    }

    scrollToCustomerInformation(event: MouseEvent) {
        let target: HTMLElement = <HTMLElement> event.srcElement!;
        let targetHTML = target.tagName === 'SPAN' ? target.innerHTML : target.children[0].innerHTML;
        this.$data.formData.location = targetHTML;

        document.getElementById('first-page')!.style.left = '-200%';
        document.getElementById('second-page')!.style.left = '-100%';
        document.getElementById('third-page')!.style.left = '0';
    }
}
</script>

<style lang="scss" scoped>
#form-container {
    background-image: url("../assets/images/possible-bg.png");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;

    #submit-button {
        background: #FBF6F0;
        color: #16a4a9;
        border: 3px solid white;
    }
    
    .form-page {
        width: 100%;
        height: calc(100% - 4vh);
        position: absolute;
        top: 2vh;

        transition: left 1s ease;

        display: flex;
        flex-direction: column;

        h2 {
            font-size: 6vh;
            margin-top: 3vh;
            margin-bottom: 0;
            text-shadow: 1px 3px 0 rgba(1, 38, 39, 0.5), 1px 13px 5px rgba(1, 38, 39, 0.5);        
        }

        .form-buttons-container {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            .form-button {
                color: black;
                background-image: url("../assets/images/blob.png");
                background-position: center; /* Center the image */
                background-repeat: no-repeat; /* Do not repeat the image */
                background-size: contain;
                height: 20vh;
                width: 20vh;

                display: flex;
                flex-direction: column;
                justify-content: center;

                cursor: pointer;

                @for $i from 1 through 8 {
                    &.form-button:nth-child(#{$i}) {
                        transform:  rotate((random(40) - 20) + deg);
                    }
                }

                span {
                    font-size: 3vh;
                }
            }
        }
    }

    .form-page:nth-child(1) {
        left: 0%;
    }

    .form-page:nth-child(2) {
        left: 100%;
    }

    .form-page:nth-child(3) {
        left: 200%;
    }

    .form-button, h2, p {
        color: white;
    }

    #third-page {
        width: 50vw;
        margin-left: 25vw;
        margin-right: 25vw;

        p {
            margin-top: 2vh;
            margin-bottom: 2vh;
            font-size: 2vh;
            line-height: 3vh;
        }

        button {
            margin-bottom: 5vh;
            width: 30%;
            align-self: center;
            cursor: pointer;
        }

        .form-content-container {
            display: flex;
            flex-direction: column;
            flex: 1;

            .form-element {
                display: flex;
                flex-direction: row;
                margin-bottom: 2%;

                display: flex;
                justify-content: center;

                input, textarea {
                    width: 70%;
                    border-radius: 2vh;
                    border: none;
                    font-size: 105%;
                    padding-left: 1vw;
                }
            }

            .form-element:first-child {
                margin-top: 2%;
            }
            .form-element:not(:last-child) {
                height: 10%;
            }
            .form-element:last-child {
                height: 24%;

                textarea {
                    padding-top: 1vh;
                    resize: none;
                }
            }
        }
    }
    
}
</style>
