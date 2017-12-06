$(document).ready(function() {
      
        var userViewModel = kendo.observable({
          isUserInformationVisible:  true,
          isUserCustomerMappingVisible: false,
          isCustomerModuleMappingVisible: false,
          isNextVisible: function(){
            return this.get('isUserInformationVisible')||this.get('isUserCustomerMappingVisible');
          },
          isPreviousVisible: function(){
            return this.get('isUserCustomerMappingVisible')||this.get('isCustomerModuleMappingVisible');
          },
          cancelEditingUser: function(e){
            userViewModel.set('isCustomerModuleMappingVisible',false);
            userViewModel.set('isUserCustomerMappingVisible',false);
            userViewModel.set('isUserInformationVisible',false);
            
          },
          showPreviousPanel: function(e){
            if(userViewModel.isCustomerModuleMappingVisible == true){
              userViewModel.set('isCustomerModuleMappingVisible',false);
              userViewModel.set('isUserCustomerMappingVisible',true);
            }
            else if(userViewModel.isUserCustomerMappingVisible == true){
              userViewModel.set('isUserCustomerMappingVisible',false);
              userViewModel.set('isUserInformationVisible',true);
            }

          },
          showNextPanel: function(e){
            if(userViewModel.isUserInformationVisible == true){
            userViewModel.set('isUserInformationVisible',false);
            userViewModel.set('isUserCustomerMappingVisible',true);
            }
            else if(userViewModel.isUserCustomerMappingVisible == true){
              userViewModel.set('isUserCustomerMappingVisible',false);
              userViewModel.set('isCustomerModuleMappingVisible',true);
            }

          },
          submitUser: function(e){
            this.cancelEditingUser(e);
          },
        });
      kendo.bind($('#pagination'), userViewModel);
  
      $('#btnEdit').click(function(){
        userViewModel.set('isUserInformationVisible',  true);
        userViewModel.set('isUserCustomerMappingVisible', false);
        userViewModel.set('isCustomerModuleMappingVisible',  false);
      });
      });
